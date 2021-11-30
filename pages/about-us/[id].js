import {useRouter} from 'next/router'

const SpecificPerson = () => {
    const router = useRouter()
    console.log(router.query);
    console.log(router.pathname);
    return (
        <div>
            This is the section for specific person

            
        </div>
    )
}

export default SpecificPerson
