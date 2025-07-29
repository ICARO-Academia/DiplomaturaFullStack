import express from 'express'
import multer from 'multer'
import { promises as fs } from 'fs'
import path from 'path'

// 1. Crear carpeta uploads
await fs.mkdir('uploads', { recursive: true })

// 2. Configuro Multer (image/png, máx 1 MB)
const upload = multer({
  dest: 'uploads',
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    cb(null, file.mimetype === 'image/png')
  }
})

const app = express()
// 3. Crear ruta /upload que reciba un archivo con el campo avatar
app.post('/upload', upload.single('avatar'), (req, res) => {
  const { filename, originalname, size } = req.file
  res.json({
    url: `/files/${filename}`,
    originalName: originalname,
    size
  })
})

app.get('/files/:name', (req, res) => {
  const safePath = path.resolve('uploads', req.params.name)
  res.sendFile(safePath)
})

app.listen(3000)