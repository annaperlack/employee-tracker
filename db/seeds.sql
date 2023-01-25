INSERT INTO departments (id, department_name)
VALUES (1, 'Human Medical Staff'),
       (2, 'Nurses'),
       (3, 'Allied Health Professionals'),
       (4, 'Support Staff');

INSERT INTO roles (id, title, salary, department_id) 
VALUES (1, 'Surgeon', 300000, 001),
       (2, 'Nurse Practitioner', 200000, 002),
       (3, 'Physical Therapist', 80000, 003);
        

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) 
VALUES (1, 'Robert', 'Smith', 1, 1),
       (2, 'Karen', 'Edwards', 2, 2),
       (3, 'Fred', 'Jones', 3, 3);
      