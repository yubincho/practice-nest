import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Workspaces } from './Workspaces';
import { Users } from './Users';

// Mentions : 채팅에서 누군가가 다른 사람을 mention 했을 때

@Index('WorkspaceId', ['WorkspaceId'], {})
@Index('SenderId', ['SenderId'], {})
@Index('ReceiverId', ['ReceiverId'], {})
@Entity({ schema: 'sleact', name: 'mentions' })
export class Mentions {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column('enum', { name: 'category', enum: ['chat', 'dm', 'system'] })
    type: 'chat' | 'dm' | 'system';

    @Column('int', { name: 'ChatId', nullable: true })
    ChatId: number | null;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column('int', { name: 'WorkspaceId', nullable: true })
    WorkspaceId: number | null;

    @Column('int', { name: 'SenderId', nullable: true })
    SenderId: number | null;

    @Column('int', { name: 'ReceiverId', nullable: true })
    ReceiverId: number | null;

    @ManyToOne(() => Workspaces, (workspaces) => workspaces.Mentions, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
    Workspace: Workspaces;

    @ManyToOne(() => Users, (users) => users.Mentions, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
    Sender: Users;

    @ManyToOne(() => Users, (users) => users.Mentions2, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
    Receiver: Users;
}