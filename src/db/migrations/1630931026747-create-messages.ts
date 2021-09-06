import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createMessages1630931026747 implements MigrationInterface {
  private table = new Table({
    name: 'messages',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'content',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'user_id',
        type: 'int',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
    ],
  });

  private foreinKey = new TableForeignKey({
    columnNames: ['user_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'users',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table, true);
    await queryRunner.createForeignKey(this.table, this.foreinKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table, true);
  }
}
