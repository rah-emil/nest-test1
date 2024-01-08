import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum PostStatus {
  PENDING = 'pending',
  PUBLISHED = 'published',
  MODERATION = 'moderation',
  DRAFT = 'draft',
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column({ type: 'longtext' })
  body: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;
}
