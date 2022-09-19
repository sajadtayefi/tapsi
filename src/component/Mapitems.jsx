function Mapitems({data}) {
    return ( 
        <>
         {data.map((item, index) => {
              return (
                <>
                  <li key={index} className="text-xl mb-2 font-semibold " >{item.head}</li>
                  <li key={index} className=" cursor-pointer hover:text-primary my-4">{item.li}</li>
                </>
              )
            })}
        </>
     );
}

export default Mapitems;