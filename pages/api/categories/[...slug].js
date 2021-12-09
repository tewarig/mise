export default function handler(req, res) {
  const { slug } = req.query
  res.send({name: slug});
}