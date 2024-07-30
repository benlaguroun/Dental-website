import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

const Blog2 = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Benefits of Regular Dental Flossing</h2>
      <div className="text-center mb-5">
        <FontAwesomeIcon icon={faTooth} size="6x" />
      </div>
      <p>
        Regular dental flossing is an essential part of maintaining good oral hygiene. It helps remove plaque and food particles between teeth and under the gumline where toothbrushes can't reach. By doing so, it reduces the risk of cavities and gum disease, keeping your smile healthy and bright.
      </p>
      <p>
        Flossing also stimulates the gums, promoting healthy blood flow and reducing inflammation. This simple habit, when combined with brushing and regular dental check-ups, can make a significant difference in your overall dental health.
      </p>
    </div>
  );
};

export default Blog2;
