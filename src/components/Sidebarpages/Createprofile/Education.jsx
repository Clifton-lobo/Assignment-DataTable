import React from 'react'
import NavigationButtons from '../../UI/Button'
import { useForm } from 'react-hook-form';

const Education = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=' '>
      <div className='mr-10'>
        <NavigationButtons/>
      </div>
      <div className='h-screen bg-white w-fit mt-4 mx-1  md:mx-5 rounded-xl'>
        <div className='bg-gradient-to-r text-white rounded-t-2xl p-3 from-[#E7499C] via-[#C152B5] to-[#8F5CD5]'> 
          <p className='text-3xl'>Personal Detail</p>
          <h1 className='text-x'>Make changes to your Profile Account here. <span className='text-white bg-[#EF4444] p-1 rounded'>Click save when you're done</span> </h1>
        </div>
        <form className="space-y-4 p-5 md: " onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row">
            <div className="flex flex-col flex-1">
              <label htmlFor="username">Username*</label>
              <input 
                type="text" 
                id="username"
                placeholder="Username" 
                className="border border-gray-400 w-full p-2 rounded" 
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="middleName">Middle Name*</label>
              <input 
                type="text" 
                id="middleName"
                placeholder="Middle name" 
                className="border w-full border-gray-400 p-2 rounded" 
                {...register("middleName", { required: "Middle name is required" })}
              />
              {errors.middleName && <span className="text-red-500 text-sm">{errors.middleName.message}</span>}
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="lastName">Last Name*</label>
              <input 
                type="text" 
                id="lastName"
                placeholder="Last name" 
                className="border w-full p-2 rounded border-gray-400" 
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
            </div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row'>
            <div className='flex flex-col flex-1'>
              <label htmlFor="email">Email*</label>
              <input 
                type="email" 
                id="email"
                placeholder="Email" 
                className="border w-full p-2 rounded border-gray-400" 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className='flex flex-col flex-1'>
              <label htmlFor="phone">Phone*</label>
              <input 
                type="text" 
                id="phone"
                placeholder="Phone" 
                className="border w-full p-2 rounded border-gray-400" 
                {...register("phone", { 
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must be 10 digits"
                  }
                })}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>
          </div>
          
          <div className='grid grid-cols-1 md:flex-row'>
            <label htmlFor="address">Address*</label>
            <textarea 
              id="address" 
              className='h-20 border rounded w-full border-gray-400' 
              {...register("address", { required: "Address is required" })}
            ></textarea>
            {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:flex-row'>
            <div>
              <label htmlFor="pinCode">Pin Code*</label>
              <input 
                type="text" 
                id="pinCode"
                placeholder="Pin code" 
                className="border w-full p-2 rounded border-gray-400" 
                {...register("pinCode", { 
                  required: "Pin code is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Pin code must be 6 digits"
                  }
                })}
              />
              {errors.pinCode && <span className="text-red-500 text-sm">{errors.pinCode.message}</span>}
            </div>
            <div>
              <label htmlFor="country">Country*</label>
              <input 
                type="text" 
                id="country"
                placeholder="Country" 
                className="border w-full p-2 rounded border-gray-400" 
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
            </div>
            <div>
              <label htmlFor="state">State*</label>
              <input 
                type="text" 
                id="state"
                placeholder="State" 
                className="border w-full p-2 rounded border-gray-400" 
                {...register("state", { required: "State is required" })}
              />
              {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}
            </div>
            <div>
              <label htmlFor="city">City*</label>
              <input 
                type="text" 
                id="city"
                placeholder="City" 
                className="border w-full p-2 rounded border-gray-400" 
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
            </div>
          </div>

          <div>
          <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-md active:scale-95'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Education