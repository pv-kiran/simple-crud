/**
 *   @swagger
 *     tags:
 *       name: User
 *       description: API for user registration and login
 */

/**
 *     @swagger
 *      /api/auth/registration:
 *       post:
 *         tags: [User]
 *         summary: Route for user registration
 *         description: It is post route for user regitration. User can 
 *                      complete the registration purpose by submitting 
 *                      the name,email and password
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        name:
 *                          type: string
 *                        email:
 *                          type: string
 *                        password:
 *                          type: string     
 *         responses:
 *             201:
 *               description: User registration is successfull
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        message:
 *                          type: string
 *                        name:
 *                          type: string
 *                        mail:
 *                          type: string
 *                      example: 
 *                          message: user creation is successfull
 *                          name: myname
 *                          email: myemail
 *             400:
 *               description: Bad request. Please submit valid name
 *                             email , password
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/auth/login:
 *       post:
 *         tags: [User]
 *         summary: Route for user login
 *         description: This is a post route for user login. User can 
 *                      login by submitting email and password
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        email:
 *                          type: string
 *                        password:
 *                          type: string             
 *         responses:
 *             200:
 *               description: User login is successfull
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        user:
 *                          type: object
 *                          properties:
 *                            name:
 *                              type: string
 *                            mail:
 *                              type: string
 *                        token:
 *                          type: string
 *                        
 *                      example: 
 *                          user:
 *                            name: myname
 *                            email: myemail
 *                          token: dfgfsgfssfcpeiqwoeuiedcm632325nd
 *             400:
 *               description: Bad request. Please submit valid 
 *                             email , password
 *             401:
 *               description: Unauthorized
 *             404:
 *               description: User not found with this email
 *             500: 
 *               description: Internal server error
 *      
 */

/**
 *   @swagger
 *     tags:
 *       name: Job
 *       description: API for creating , reading , updating and deleting jobs
 */








/**
 *     @swagger
 *      /api/job/create:
 *       post:
 *         tags: [Job]
 *         summary: Route for craeting job by its id
 *         description: Route for creating job. User have to submit the *                      company name,position.
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        company:
 *                          type: string
 *                        position:
 *                          type: string 
 *                        description:
 *                          type: string
 *         responses:
 *             200:
 *               description: Success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties: 
 *                              id:
 *                                type: string
 *                              company: 
 *                                type: string
 *                              position:
 *                                type: string
 *                              description: 
 *                                type: string
 *                              craetedBy:
 *                                type: string
 *             400:
 *               description: Bad request. 
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */



/**
 *     @swagger
 *      /api/job/edit/{id}:
 *       put:
 *         tags: [Job]
 *         summary: Route for updating job.
 *         description: Route for updating job. User can update the job *                      details by providing job id.
 *         produces:
 *            - application/json
 *         consumes: 
 *            - application/json
 *         parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: string
 *              required: true
 *              description: job id
 *         requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                        company:
 *                          type: string
 *                        position:
 *                          type: string 
 *                        description:
 *                          type: string
 *         responses:
 *             200:
 *               description: Success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties: 
 *                              id:
 *                                type: string
 *                              company: 
 *                                type: string
 *                              position:
 *                                type: string
 *                              description: 
 *                                type: string
 *                              craetedBy:
 *                                type: string
 *             400:
 *               description: Bad request. Please submit valid job id.
 *             401:
 *               description: Unauthorized
 *             404:
 *               description: Job not found with provided id
 *             500: 
 *               description: Internal server error
 *      
 */

/**
 *     @swagger
 *      /api/job/all:
 *       get:
 *         tags: [Job]
 *         summary: Route for fetching all the jobs created by the user
 *         description: This is a get route to fetch all the jobs that *                      have been created by the user. 
 *         responses:
 *             200:
 *               description: Success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                         jobs: 
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                   id:
 *                                    type: string
 *                                   company: 
 *                                    type: string
 *                                   position:
 *                                    type: string
 *                                   description: 
 *                                    type: string
 *                                   craetedBy:
 *                                    type: string
 *                         count:
 *                           type: integer
 *             400:
 *               description: Bad request. 
 *             404:
 *               description: Job not found 
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */


/**
 *     @swagger
 *      /api/job/{id}:
 *       get:
 *         parameters: 
 *            - in: path
 *              name: id
 *              schema: 
 *                type: string
 *              required: true
 *              description: Job id
 *         tags: [Job]
 *         summary: Route for fetching job by its id
 *         description: This is a get route to fetch all the jobs by its id
 *         responses:
 *             200:
 *               description: Success
 *               content:
 *                  application/json:
 *                    schema:
 *                      type: object
 *                      properties:
 *                         jobs: 
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                   id:
 *                                    type: string
 *                                   company: 
 *                                    type: string
 *                                   position:
 *                                    type: string
 *                                   description: 
 *                                    type: string
 *                                   craetedBy:
 *                                    type: string
 *             400:
 *               description: Bad request. Please submit valid Job id
 *             404:
 *               description: Job not found with this Id
 *             401:
 *               description: Unauthorized
 *             500: 
 *               description: Internal server error
 *      
 */









/**
 *     @swagger
 *      /api/job/remove/{id}:
 *       delete:
 *         tags: [Job]
 *         summary: Route for deleting job.
 *         description: Route for deleting job. User can delete the job *                      details by providing job id.
 *         parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                type: string
 *              required: true
 *              description: job id
 *         responses:
 *             200:
 *               description: Success
 *             400:
 *               description: Bad request.
 *             401:
 *               description: Unauthorized
 *             404:
 *               description: Job not found with provided job id
 *             500: 
 *               description: Internal server error
 *      
 */
