export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
      }
      comments: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          note_id: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          note_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          note_id?: string | null
          user_id?: string | null
        }
      }
      news: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
      }
      notes: {
        Row: {
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
        }
      }
      notes_ori: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          title?: string | null
          user_id?: string | null
        }
      }
      notices: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
      }
      todos: {
        Row: {
          completed: boolean
          created_at: string
          id: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          completed?: boolean
          created_at?: string
          id?: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          completed?: boolean
          created_at?: string
          id?: string
          title?: string | null
          user_id?: string | null
        }
      }
      todos_ori: {
        Row: {
          created_at: string | null
          id: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          title?: string | null
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
