{{={= =}=}}
import express from 'express'

{=# isAuthEnabled =}
import auth from '../../core/auth.js'
{=/ isAuthEnabled =}

{=# operationRoutes =}
import {= importIdentifier =} from '{= importPath =}'
{=/ operationRoutes =}

const router = express.Router()

{=# operationRoutes =}
router.post('{= routePath =}', {=# isUsingAuth =} auth, {=/ isUsingAuth =} {= importIdentifier =})
{=/ operationRoutes =}

export default router
