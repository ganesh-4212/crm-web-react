import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Customer = {
  __typename?: "Customer";
  id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  address: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  phone: Scalars["String"];
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  profilePic?: Maybe<Scalars["String"]>;
};

export type CustomerInput = {
  id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  address: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  profilePic?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCustomer: Customer;
};

export type MutationCreateCustomerArgs = {
  customer: CustomerInput;
};

export type Query = {
  __typename?: "Query";
  customer?: Maybe<Customer>;
  customers: Array<Customer>;
};

export type QueryCustomerArgs = {
  customerId: Scalars["String"];
};
export type CreateCustomerMutationVariables = {
  customer: CustomerInput;
};

export type CreateCustomerMutation = { __typename?: "Mutation" } & {
  createCustomer: { __typename?: "Customer" } & Pick<
    Customer,
    "id" | "name" | "phone" | "email" | "address"
  >;
};

export type GetCustomerByIdQueryVariables = {
  id: Scalars["String"];
};

export type GetCustomerByIdQuery = { __typename?: "Query" } & {
  customer: Maybe<
    { __typename?: "Customer" } & Pick<
      Customer,
      "id" | "name" | "phone" | "email" | "address"
    >
  >;
};

export type GetCustomersQueryVariables = {};

export type GetCustomersQuery = { __typename?: "Query" } & {
  customers: Array<
    { __typename?: "Customer" } & Pick<
      Customer,
      "id" | "name" | "phone" | "email" | "address"
    >
  >;
};

export const CreateCustomerDocument = gql`
  mutation createCustomer($customer: CustomerInput!) {
    createCustomer(customer: $customer) {
      id
      name
      phone
      email
      address
    }
  }
`;
export type CreateCustomerMutationFn = ApolloReactCommon.MutationFunction<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;

export function useCreateCustomerMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCustomerMutation,
    CreateCustomerMutationVariables
  >(CreateCustomerDocument, baseOptions);
}
export type CreateCustomerMutationHookResult = ReturnType<
  typeof useCreateCustomerMutation
>;
export type CreateCustomerMutationResult = ApolloReactCommon.MutationResult<
  CreateCustomerMutation
>;
export type CreateCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCustomerMutation,
  CreateCustomerMutationVariables
>;
export const GetCustomerByIdDocument = gql`
  query getCustomerById($id: String!) {
    customer(customerId: $id) {
      id
      name
      phone
      email
      address
    }
  }
`;

export function useGetCustomerByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCustomerByIdQuery,
    GetCustomerByIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCustomerByIdQuery,
    GetCustomerByIdQueryVariables
  >(GetCustomerByIdDocument, baseOptions);
}
export type GetCustomerByIdQueryHookResult = ReturnType<
  typeof useGetCustomerByIdQuery
>;
export type GetCustomerByIdQueryResult = ApolloReactCommon.QueryResult<
  GetCustomerByIdQuery,
  GetCustomerByIdQueryVariables
>;
export const GetCustomersDocument = gql`
  query getCustomers {
    customers {
      id
      name
      phone
      email
      address
    }
  }
`;

export function useGetCustomersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCustomersQuery,
    GetCustomersQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCustomersQuery,
    GetCustomersQueryVariables
  >(GetCustomersDocument, baseOptions);
}
export type GetCustomersQueryHookResult = ReturnType<
  typeof useGetCustomersQuery
>;
export type GetCustomersQueryResult = ApolloReactCommon.QueryResult<
  GetCustomersQuery,
  GetCustomersQueryVariables
>;
