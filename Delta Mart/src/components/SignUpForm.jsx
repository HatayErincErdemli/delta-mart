import api from "@/utils/axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      role_id: "", // Will be set to Müşteri role ID once fetched
    },
  });

  const password = watch("password");
  const selectedRoleId = watch("role_id");

  // Find selected role code
  const selectedRole = roles.find(
    (role) => role.id.toString() === selectedRoleId
  )?.code;

  // Fetch roles when component mounts
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        const data = response.data;
        setRoles(data);

        // Set default role to Müşteri (customer)
        const customerRole = data.find((role) => role.code === "customer");
        if (customerRole) {
          setValue("role_id", customerRole.id.toString());
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, [setValue]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Base data structure for all roles
      const data = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role_id: formData.role_id,
      };

      // Add store object only for store role
      if (selectedRole === "store") {
        data.store = {
          name: formData.store_name,
          phone: formData.store_phone,
          tax_no: formData.tax_no,
          bank_account: formData.bank_account,
        };
      }

      const response = await api.post("/signup", data);
      console.log("Registration successful:", response.data);

      // Show success message and redirect
      toast.success(
        "Hesabınız oluşturuldu! E-posta adresinize gönderilen aktivasyon linkine tıklayarak hesabınızı aktifleştirebilirsiniz.",
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      history.goBack(); // Go back to previous page
    } catch (error) {
      // Handle error cases
      const errorMessage =
        error.response?.data?.message || "Kayıt işlemi başarısız oldu";
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Hesap Oluştur
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Show error message at the top of the form if exists */}
          {error && (
            <div className="mb-4 p-3 rounded bg-red-50 text-red-600 text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Ad Soyad
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Ad Soyad gereklidir",
                    minLength: {
                      value: 3,
                      message: "Ad Soyad en az 3 karakter olmalıdır",
                    },
                  })}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.name ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-posta
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "E-posta gereklidir",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Geçerli bir e-posta adresi giriniz",
                    },
                  })}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password fields */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Şifre
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Şifre gereklidir",
                    minLength: {
                      value: 6,
                      message: "Şifre en az 6 karakter olmalıdır",
                    },
                  })}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Şifre Tekrar
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Şifre tekrarı gereklidir",
                    validate: (value) =>
                      value === password || "Şifreler eşleşmiyor",
                  })}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.confirmPassword
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Role selection */}
            <div>
              <label
                htmlFor="role_id"
                className="block text-sm font-medium text-gray-700"
              >
                Rol
              </label>
              <div className="mt-1">
                <select
                  id="role_id"
                  {...register("role_id", {
                    required: "Rol seçimi gereklidir",
                  })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
                {errors.role_id && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.role_id.message}
                  </p>
                )}
              </div>
            </div>

            {/* Conditional Store Fields */}
            {selectedRole === "store" && (
              <>
                <div>
                  <label
                    htmlFor="store_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mağaza Adı
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_name"
                      type="text"
                      {...register("store_name", {
                        required: "Mağaza adı gereklidir",
                        minLength: {
                          value: 3,
                          message: "Mağaza adı en az 3 karakter olmalıdır",
                        },
                      })}
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                        errors.store_name ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                    {errors.store_name && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.store_name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="store_phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mağaza Telefonu
                  </label>
                  <div className="mt-1">
                    <input
                      id="store_phone"
                      type="tel"
                      {...register("store_phone", {
                        required: "Mağaza telefonu gereklidir",
                        pattern: {
                          value: /^(\+90|0)?[0-9]{10}$/,
                          message:
                            "Geçerli bir Türkiye telefon numarası giriniz",
                        },
                      })}
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                        errors.store_phone
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.store_phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.store_phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tax_no"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vergi Numarası
                  </label>
                  <div className="mt-1">
                    <input
                      id="tax_no"
                      type="text"
                      {...register("tax_no", {
                        required: "Vergi numarası gereklidir",
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message:
                            'Vergi numarası "TXXXXVXXXXXX" formatında olmalıdır',
                        },
                      })}
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                        errors.tax_no ? "border-red-300" : "border-gray-300"
                      }`}
                    />
                    {errors.tax_no && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.tax_no.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bank_account"
                    className="block text-sm font-medium text-gray-700"
                  >
                    IBAN
                  </label>
                  <div className="mt-1">
                    <input
                      id="bank_account"
                      type="text"
                      {...register("bank_account", {
                        required: "IBAN gereklidir",
                        pattern: {
                          value: /^TR\d{2}\d{5}[A-Z0-9]{17}$/,
                          message: "Geçerli bir IBAN giriniz",
                        },
                      })}
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                        errors.bank_account
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.bank_account && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.bank_account.message}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
              >
                {isLoading ? "Kaydediliyor..." : "Kayıt Ol"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
