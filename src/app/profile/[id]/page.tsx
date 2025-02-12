// The [id] folder is used to fetch the params passed as part of URL
// and are obtained as an object called params(arg) of this component

// in particular this page.tsx corresponds to /profile/:id endpoint,
// which is for fetching profile based on id

export default function UserProfile ({params}:any) {
    return(
        <div className="bg-indigo-500 ">
            <h1 className="text-center text-gray-100 text-2xl font-medium">
            Welcome user : 
            </h1>
            <h2 className="text-center text-gray-100 text-xl font-medium">

                Profile Page : {params.id}
            </h2>
       </div>
    )
}