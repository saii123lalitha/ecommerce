import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <div className="flex flex-col items-center h-full pt-10">
          {order
            .filter((obj) => obj.userid === userid)
            .map((order, index) => (
              <div key={index} className="w-full max-w-5xl mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
                  Order #{index + 1}
                </h2>
                {order.cartItems.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between mb-6 rounded-lg bg-white p-6 shadow-md"
                    style={{
                      backgroundColor: mode === 'dark' ? '#282c34' : '',
                      color: mode === 'dark' ? 'white' : '',
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt="product-image"
                      className="w-20 h-20 rounded-lg"
                    />
                    <div className="ml-4 flex-grow">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {item.description}
                      </p>
                      <p className="mt-1 text-xs text-gray-700">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl text-white">No Orders</h2>
      )}
    </Layout>
  );
}

export default Order;
