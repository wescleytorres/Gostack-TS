/**
 * Migrations -> Linha do tempo
 *
 * funciona como um git, onde vai ter todas alterações do BD, podendo compartilhar
 * com os integrantes da equipe.
 *
 * ||=> OBS.: Alterar uma migrations apenas se ela ainda tiver so no repositorio local
 * se ja foi pra nuvem, esqueça.
 */

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1607093896536
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
