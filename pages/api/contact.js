import { getDataSource } from "@/lib/db";
import { Contact } from "@/models/Contact";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  try {
    const AppDataSource = await getDataSource();
    const contactRepo = AppDataSource.getRepository(Contact);

    const newContact = contactRepo.create({ name, email, message });
    await contactRepo.save(newContact);

    res.status(201).json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error al guardar mensaje:", error);
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
}
