import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import PageWrapper from "../../components/wrappers/PageWrapper";
import { useAuth } from "../../hooks/useAuth";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Signin = () => {
  const {
    email,
    password,
    setCredentials,
    submit,
    showPassword,
    toggleShowPassword,
    loading,
  } = useAuth(true);

  return (
    <PageWrapper className="p-4 m-auto">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            required
            type="text"
            name="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={({ target: { value } }) => setCredentials("email", value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            required
            type={!showPassword ? "password" : "text"}
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={({ target: { value } }) =>
              setCredentials("password", value)
            }
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="checkbox"
            name="showPassword"
            onChange={toggleShowPassword}
            checked={showPassword}
          />{" "}
          <Label htmlFor="showPassword">Show Password</Label>
        </FormGroup>
        <FormGroup>
          <Button color="primary" block type="submit" disabled={loading}>
            {loading ? <BeatLoader color="#fff" /> : "Sign in"}
          </Button>
        </FormGroup>
      </Form>
      <div className="my-3">
        <p>
          New to Lite CMS? <Link to="/register">Register</Link>
        </p>
      </div>
    </PageWrapper>
  );
};

export default Signin;
