import express from 'express'
import clubs from '../controllers/clubs.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

// * CLUBS
router.route('/clubs')
  .get(clubs.index)
  .post(secureRoute, clubs.create)

router.route('/clubs/:clubId')
  .get(clubs.show)
  .delete(secureRoute, clubs.delete)
  .put(secureRoute, clubs.update)

router.route('/clubs/:clubId/like')
  .post(secureRoute, clubs.likeClub)

// * PUBS
router.route('/pubs')
  .get(clubs.pubIndex)

router.route('/clubs/:clubId/pubs')
  .post(secureRoute, clubs.pubCreate)

router.route('/clubs/:clubId/pubs/:pubId')
  .get(clubs.pubShow)
  .delete(secureRoute, clubs.pubDelete) 

router.route('/clubs/:clubId/pubs/:pubId/like')
  .post(secureRoute, clubs.likePub)

// * COMMENTS
router.route('/clubs/:clubId/pubs/:pubId/comments')
  .get(clubs.commentShow)
  .post(secureRoute, clubs.commentCreate)

router.route('/clubs/:clubId/pubs/:pubId/comments/:commentId')
  .delete(secureRoute, clubs.commentDelete)

// * USERS
router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/users', auth.usersIndex)

router.route('/user')
  .get(secureRoute, auth.userShow)


export default router