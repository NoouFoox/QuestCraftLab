import Dexie, { type EntityTable } from 'dexie';


interface Quest {
  id?: number
  title: string
  description: string
  status: string
  config: string
  created_at: string
  updated_at: string
}

const db = new Dexie('qcl-db') as Dexie & {
  quests: EntityTable<Quest, 'id'>,
  quests_backup: EntityTable<Quest, 'id'>,
}

db.version(1).stores({
  quests: '++id,title,description,status,config,created_at,updated_at',
  quests_backup: '++id,title,description,status,config,created_at,updated_at',
})

export { db }
export type { Quest }