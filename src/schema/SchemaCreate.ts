import {z} from 'zod'
import {startOfDay, addBusinessDays} from 'date-fns'
import {user_email} from '@/api/fn_user_get'

export const schema_create = z.object({
    OrderedBy: z.string(),
    Contract: z.string(),
    JobType: z.string(),
    JobReference: z.string().min(4, {message: 'Min. 4 chars.'}),
    Supplier: z.string(),
    Eque2Date: z.date().min(startOfDay(new Date()), {message: 'Today or later'})
})

export type SchemaCreate = z.infer<typeof schema_create>

export const schema_default : Partial<SchemaCreate> = {
    Eque2Date: addBusinessDays(new Date(), 2)
}
