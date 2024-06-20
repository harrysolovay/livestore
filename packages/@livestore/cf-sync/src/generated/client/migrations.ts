export default [
  {
    "statements": [
      "CREATE TABLE \"mutation_log\" (\n  \"id\" TEXT NOT NULL,\n  \"mutation\" TEXT NOT NULL,\n  \"argsjson\" TEXT NOT NULL,\n  \"schemahash\" INTEGER NOT NULL,\n  \"createdat\" TEXT NOT NULL,\n  \"syncstatus\" TEXT NOT NULL,\n  CONSTRAINT \"mutation_log_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings (namespace, tablename, flag) VALUES ('main', 'mutation_log', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_mutation_log_primarykey;",
      "CREATE TRIGGER update_ensure_main_mutation_log_primarykey\n  BEFORE UPDATE ON \"main\".\"mutation_log\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_mutation_log_into_oplog;",
      "CREATE TRIGGER insert_main_mutation_log_into_oplog\n   AFTER INSERT ON \"main\".\"mutation_log\"\n   WHEN 1 = (SELECT flag from _electric_trigger_settings WHERE namespace = 'main' AND tablename = 'mutation_log')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'mutation_log', 'INSERT', json_patch('{}', json_object('id', new.\"id\")), json_object('argsjson', new.\"argsjson\", 'createdat', new.\"createdat\", 'id', new.\"id\", 'mutation', new.\"mutation\", 'schemahash', new.\"schemahash\", 'syncstatus', new.\"syncstatus\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_mutation_log_into_oplog;",
      "CREATE TRIGGER update_main_mutation_log_into_oplog\n   AFTER UPDATE ON \"main\".\"mutation_log\"\n   WHEN 1 = (SELECT flag from _electric_trigger_settings WHERE namespace = 'main' AND tablename = 'mutation_log')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'mutation_log', 'UPDATE', json_patch('{}', json_object('id', new.\"id\")), json_object('argsjson', new.\"argsjson\", 'createdat', new.\"createdat\", 'id', new.\"id\", 'mutation', new.\"mutation\", 'schemahash', new.\"schemahash\", 'syncstatus', new.\"syncstatus\"), json_object('argsjson', old.\"argsjson\", 'createdat', old.\"createdat\", 'id', old.\"id\", 'mutation', old.\"mutation\", 'schemahash', old.\"schemahash\", 'syncstatus', old.\"syncstatus\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_mutation_log_into_oplog;",
      "CREATE TRIGGER delete_main_mutation_log_into_oplog\n   AFTER DELETE ON \"main\".\"mutation_log\"\n   WHEN 1 = (SELECT flag from _electric_trigger_settings WHERE namespace = 'main' AND tablename = 'mutation_log')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'mutation_log', 'DELETE', json_patch('{}', json_object('id', old.\"id\")), NULL, json_object('argsjson', old.\"argsjson\", 'createdat', old.\"createdat\", 'id', old.\"id\", 'mutation', old.\"mutation\", 'schemahash', old.\"schemahash\", 'syncstatus', old.\"syncstatus\"), NULL);\nEND;"
    ],
    "version": "1"
  }
]