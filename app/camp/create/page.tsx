import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createLandmarkAction } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import MapLandmark from "@/components/map/MapLandmark";
import ImageInput from "@/components/form/ImageInput";

const CreateLandmark = async () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create Landmark
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createLandmarkAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              placeholder="Eiffel Tower in France..."
            />

            {/* Category */}
            <CategoryInput />
          </div>

          <TextAreaInput name="description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="price"
              label="price"
              type="number"
              placeholder="$"
            />
            <ProvinceInput />
          </div>
          
          <ImageInput />

          <MapLandmark />
          <SubmitButton text="create Landmark" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateLandmark;
