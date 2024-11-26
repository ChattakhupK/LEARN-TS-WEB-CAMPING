import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              placeholder="name1234"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="lastname"
            />
            <FormInput
              name="userName"
              label="Username"
              type="text"
              placeholder="Username"
            />
          </div>
          <SubmitButton text="create profile" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
