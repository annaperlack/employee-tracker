INSERT INTO departments (id, department_name)
VALUES (1, 'Human Medical Staff'),
       (2, 'Nurses'),
       (3, 'Allied Health Professionals'),
       (4, 'Support Staff');

INSERT INTO roles (id, title, salary, department_id) 
VALUES (10, 'Surgeon', 350000, 1),
       (11, 'Nurse', 70000, 2),
       (12, 'Physical Therapist', 80000, 3),
       (13, 'House Keeper', 40000, 4);
        
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) 
VALUES (14, 'Robert', 'Smith', 10, 18),
       (15, 'Karen', 'Edwards', 11, 19),
       (16, 'Fred', 'Jones', 12, 20),
       (17, 'Susan', 'Brooks', 13, 21);
      