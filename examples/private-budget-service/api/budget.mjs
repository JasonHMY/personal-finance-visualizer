import {get,put,head} from '@vercel/blob';
import {createBudgetHandler} from '../lib/budget-handler.mjs';
// Deployment protection authenticates the owner; writes also require same-origin JSON and a revision.
export default createBudgetHandler({get,put,head});
