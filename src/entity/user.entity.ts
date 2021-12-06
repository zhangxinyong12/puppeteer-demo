/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class User {
    // 会以类名来创建表,如果是驼峰命名的,生成的表名是下划线区分
    @PrimaryGeneratedColumn({ comment: '主键id' })
    id: number;

    @Column({comment:'名字'})
    name:string

    @Column({ comment: "cookie",  })
    cookie: string;

}
