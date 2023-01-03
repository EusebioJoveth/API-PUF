import { prisma } from '~/data'

export const list = async (ctx) =>{
    try{
        const users = await prisma.user.findMany()
        ctx.body = users

    }catch(error){
        ctx.status = 500
        ctx.body = 'Ops! Algo deu errado, tente novamente'
    }
}

export const create =(ctx) =>{
    ctx.body = 'Create users'
}

export const update = (ctx) =>{
    ctx.body = 'Update users'
}

export const remove = (ctx) =>{
    ctx.body = 'Remove Users'
}
