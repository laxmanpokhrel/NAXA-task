import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import serialiseFormData from "../utils/serialiseFormData"
export default () => {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            address: "",
            email: "",
            contact: "",
            cv: "",
            photo: ""
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Name is required."),
            address: Yup.string().required("Address must be provided."),
            email: Yup.string().email("Email not valid.").required("Email is required."),
            contact: Yup.string().length(10, "Contact number not valid."),
            cv: Yup.mixed().required("Cv is required"),
            photo: Yup.mixed().required("Photo is required")
        }),
        onSubmit: values => {
            let formData = new FormData()
            formData = serialiseFormData(formData, values)
            // dispatch post action
        }
    })
    return (
        <>
            <section className="w-screen h-[25%] flex justify-center">
                <div className="cover w-[75%] h-full flex justify-center items-center">
                    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-4">
                        <div className="form-controls flex flex-col gap-4">
                            <div className="form-control width-full flex flex-col gap-2 p-2 justify-center">
                                <label htmlFor="fullName" className={formik.touched.fullName && formik.errors.fullName ? "text-red-500" : ""}>{formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : "Full Name"}</label>
                                <input onChange={formik.handleChange}
                                    required
                                    value={formik.values.fullName}
                                    type="text"
                                    name="fullName"
                                    className="border outline-none focus:border-blue-500 flex-1 p-2 rounded-md"
                                    placeholder="Full Name"
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="form-control width-full flex flex-col gap-2 p-2 justify-center">
                                <label htmlFor="address"
                                    className={formik.touched.address && formik.errors.address ? "text-red-500" : ""}>
                                    {formik.touched.address && formik.errors.address ? formik.errors.address : "Address"}
                                </label>
                                <input onChange={formik.handleChange}
                                    required
                                    value={formik.values.address}
                                    type="text"
                                    name="address"
                                    className="border outline-none active:border-blue-500 flex-1 p-2 rounded-md"
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="form-control width-full flex gap-2 p-2 flex-col justify-center">
                                <label htmlFor="email" className={formik.touched.email && formik.errors.email ? "text-red-500" : ""}>{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
                                <input onChange={formik.handleChange}
                                    required
                                    value={formik.values.email}
                                    type="email"
                                    name="email"
                                    className="border outline-none active:border-blue-500 flex-1 p-2 rounded-md"
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="form-control width-full flex flex-col gap-2 p-2 justify-center">
                                <label htmlFor="contact"
                                    className={formik.touched.contact && formik.errors.contact ? "text-red-500" : ""}>
                                    {formik.touched.contact && formik.errors.contact ? formik.errors.contact : "Contact"}
                                </label>
                                <input onChange={formik.handleChange}
                                    required
                                    value={formik.values.contact}
                                    type="text"
                                    name="contact"
                                    className="border outline-none active:border-blue-500 flex-1 p-2 rounded-md"
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            <div className="form-control width-full flex gap-2 p-2 flex-col justify-center">
                                <label htmlFor="photo" className={`${formik.touched.photo && formik.errors.photo ? "text-red-400" : ""}`}>{formik.touched.cv && formik.errors.cv ? formik.errors.photo : "Upload your photo"}</label>
                                <input
                                    required
                                    type="file"
                                    name="photo"
                                    accept="image/png, image/jpeg"
                                    onChange={(e) => formik.setFieldValue("photo", e.target.files[0])}
                                    className="outline-none active:border-blue-500 flex-1 p-2 rounded-md"
                                />
                            </div>
                            <div className="form-control width-full flex gap-2 p-2 flex-col justify-center">
                                <label htmlFor="cv" className={`${formik.touched.cv && formik.errors.cv ? "text-red-400" : ""}`}>{formik.touched.cv && formik.errors.cv ? formik.errors.cv : "Upload your cv"}</label>
                                <input
                                    required
                                    type="file"
                                    name="cv"
                                    accept=".doc,.docx,.xml,application/msword"
                                    onChange={(e) => formik.setFieldValue("cv", e.target.files[0])}
                                    className="outline-none active:border-blue-500 flex-1 p-2 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="form-actions">
                            <div className="form-action">
                                <button type="button"
                                    onClick={formik.submitForm}
                                    className={`px-4 
                                    py-2
                                     outline-none 
                                    text-white 
                                      rounded-xl
                                    ${formik.isValid ? "bg-green-500 hover:bg-green-400" : "bg-gray-500 hover:bg-gray-400"}
                                    `}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        </>
    )
}