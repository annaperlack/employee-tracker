INSERT INTO departments (id, department_name)
VALUES (001, 'Human Medical Staff'),
       (002, 'Nurses'),
       (003, 'Allied Health Professionals'),
       (004, 'Support Staff');

INSERT INTO roles (id, title, salary, department_id) 
VALUES (001, 'Surgeon', 300000, 001),
       (002, 'Nurse Practitioner', 200000, 001),
       (003, 'Physical Therapist', 80000, 003)
        

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) 
VALUES (001, 'Robert', 'Smith', 001, 001),
       (002, 'Karen', 'Edwards', 002, 001),
       (003, 'Fred', 'Jones', 003, 003)
      