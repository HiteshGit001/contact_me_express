import ContactMe from "../models/contactMe.js"

export const createRequest = async (req, res) => {
  const data = new ContactMe(req.body);
  try {
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}