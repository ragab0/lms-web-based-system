/* the first && second concepts of redux (action && reducer)
 * >>> the create slice automatically will:
 * 1. define action constants for subReducer into the reducers;
 * 2. create action objects for each action;
 * 3. create acion creators for each action object;
 * 4. GENERATE the main [reducer && actions] that we can export them to the store by::
 *
 * it allows us:
 * 1. to composite each action into a single reducer of its own as it finally combine them in one reducer && in one main action;
 * 2. to mutate the state directly as it uses the immer library under the hood;
 *
 */

/* the third concept of redux:
 * >>> the configureStore automatically will:
 * 1. combine the all "reducers" of reducer field under the hood into one main reducer;
 * 2. combining the all "actions" into one which consists of the sliceName/reducerFieldName;
 * 3. combining the all "middleware" into one by the middlware prop method which accepts by default:
 *    a function that returns the list of all middlware so that we can add ours to (concat);
 */

/*
 * the extraReducers:
 * 1. in redux the action was go through the all reducer/slice or the all reducers was recieve the same action,
 *    so that they can response to it, but with rtk that isn't allowed, as each reducer only response to actions that are generated from it;
 * 2. with extra we can response to external actions && handle the CURRENT stae based on that;
 * ~~ they are not shown into the generated action of the slice;
 * ~~ there are two ways to define it:
 *    1. we have to write the name of the external slice that will go through or recieved by, before the action name,
 *       && all as a computed string name takes a function like `{["cake/order"] : (stateOfCurrentSlice, action) => {}}`;
 *    2. using the builder function like `builder => {}`
 *
 *
 * the asyncThunk is automatically will:
 * 1. instead of creating a parent actionCreator that returns a function with one argument so that get catched by the thunk middler,
 *    it allows us to create explictly thunk without that restriciton of creation that returns an explicitly promise [axios, fetch];
 * 2. instead of calling the dispastch inside the action function,
 *    it will generates the three transactions of async [pending, fulffiled, reject] that get accessed by the extra reducers;
 *
 */
