import { useEffect } from "react"

const MyPromise = new Promise(
    (resolve, reject) => {
        const x = false
        if (x) {
            resolve({ msg: "Resolvido" })
        } else {
            reject({ msg: "Rejeitado" })
        }
    }

)

const MyAsync = () => {

    useEffect(
        () => {
            // MyPromise
            //     .then(
            //         (data) => { console.log(data.msg) }
            //     )
            //     .catch(
            //         (data) => { console.log(data.msg) }
            //     )

            getPromise()

        }, []
    )

    async function getPromise() {
        try {
            const response = await MyPromise
            console.log(response.msg)
        } catch (error) {
            console.log(error.msg)
        }
    }

    return (
        <>
            <h1>Testando meu async</h1>
        </>
    )

}

export default MyAsync