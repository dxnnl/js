import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
 const nuevoestudiante = await prisma.estudiante.create({
    data:{
       nombre: "Daniell",
       pais: "Noruega",
       email: "conejito@pompom.com"
    }
 });    
  console.log("nuevo estudiante creado: ", nuevoestudiante);
  const todosEstudiantes = await prisma.estudiante.findMany();
  console.log("todos los estudiantes: " );
  console.dir(todosEstudiantes, {depth: null})
}
main()
.catch((e) => {
    console.error(e);
    Process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})