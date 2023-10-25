import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  const name = cookieStore.get("theme");
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br">
        <div class="w-full max-w-lg px-24 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <div class="max-w-md mx-auto space-y-6">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-6x1 font-bold   lg:text-6x1 text-primary-600 dark:text-primary-500">
                  Cookie
                </h1>
                <p class="  mb-4 text-6x1 font-bold   lg:text-6x1 text-primary-600 dark:text-primary-500 ">
                  {JSON.stringify(name)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
