import {
  ByteBufferStruct,
  FFI_ERRORCODE,
  FFI_OBJECT_HANDLE,
  StringListStruct,
  FFI_OBJECT_HANDLE_PTR,
  FFI_STRING,
  FFI_INT8,
  FFI_INT64,
  CredentialEntryListStruct,
  CredentialProveListStruct,
  ObjectHandleListStruct,
  FFI_STRING_PTR,
  ByteBufferStructPtr,
  FFI_INT8_PTR,
  FFI_VOID,
  I32ListStruct,
  NonRevokedIntervalOverrideListStruct,
} from '../ffi'

export const nativeBindings = {
  // first element is method return type, second element is list of method argument types
  anoncreds_buffer_free: [FFI_VOID, [ByteBufferStruct]],
  anoncreds_create_credential: [
    FFI_ERRORCODE,
    [
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE,
      StringListStruct,
      StringListStruct,
      StringListStruct,
      FFI_STRING,
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE_PTR,
    ],
  ],
  anoncreds_create_credential_definition: [
    FFI_ERRORCODE,
    [
      FFI_STRING,
      FFI_OBJECT_HANDLE,
      FFI_STRING,
      FFI_STRING,
      FFI_STRING,
      FFI_INT8,
      FFI_OBJECT_HANDLE_PTR,
      FFI_OBJECT_HANDLE_PTR,
      FFI_OBJECT_HANDLE_PTR,
    ],
  ],
  anoncreds_create_credential_offer: [
    FFI_ERRORCODE,
    [FFI_STRING, FFI_STRING, FFI_OBJECT_HANDLE, FFI_OBJECT_HANDLE_PTR],
  ],
  anoncreds_create_credential_request: [
    FFI_ERRORCODE,
    [
      FFI_STRING,
      FFI_STRING,
      FFI_OBJECT_HANDLE,
      FFI_STRING,
      FFI_STRING,
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE_PTR,
      FFI_OBJECT_HANDLE_PTR,
    ],
  ],
  anoncreds_create_link_secret: [FFI_ERRORCODE, [FFI_OBJECT_HANDLE_PTR]],
  anoncreds_create_or_update_revocation_state: [
    FFI_ERRORCODE,
    [
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE,
      FFI_INT64,
      FFI_STRING,
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE_PTR,
    ],
  ],
  anoncreds_create_presentation: [
    FFI_ERRORCODE,
    [
      FFI_OBJECT_HANDLE,
      CredentialEntryListStruct,
      CredentialProveListStruct,
      StringListStruct,
      StringListStruct,
      FFI_STRING,
      ObjectHandleListStruct,
      StringListStruct,
      ObjectHandleListStruct,
      StringListStruct,
      FFI_OBJECT_HANDLE_PTR,
    ],
  ],
  anoncreds_create_revocation_registry_def: [
    FFI_ERRORCODE,
    [
      FFI_OBJECT_HANDLE,
      FFI_STRING,
      FFI_STRING,
      FFI_STRING,
      FFI_STRING,
      FFI_INT64,
      FFI_STRING,
      FFI_OBJECT_HANDLE_PTR,
      FFI_OBJECT_HANDLE_PTR,
    ],
  ],
  anoncreds_create_schema: [
    FFI_ERRORCODE,
    [FFI_STRING, FFI_STRING, FFI_STRING, StringListStruct, FFI_OBJECT_HANDLE_PTR],
  ],
  anoncreds_credential_get_attribute: [FFI_ERRORCODE, [FFI_OBJECT_HANDLE, FFI_STRING, FFI_STRING_PTR]],
  anoncreds_encode_credential_attributes: [FFI_ERRORCODE, [StringListStruct, FFI_STRING_PTR]],
  anoncreds_generate_nonce: [FFI_ERRORCODE, [FFI_STRING_PTR]],
  anoncreds_get_current_error: [FFI_ERRORCODE, [FFI_STRING_PTR]],
  anoncreds_object_free: [FFI_VOID, [FFI_OBJECT_HANDLE]],
  anoncreds_object_get_json: [FFI_ERRORCODE, [FFI_OBJECT_HANDLE, ByteBufferStructPtr]],
  anoncreds_object_get_type_name: [FFI_ERRORCODE, [FFI_OBJECT_HANDLE, FFI_STRING_PTR]],
  anoncreds_presentation_request_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_process_credential: [
    FFI_ERRORCODE,
    [FFI_OBJECT_HANDLE, FFI_OBJECT_HANDLE, FFI_STRING, FFI_OBJECT_HANDLE, FFI_OBJECT_HANDLE, FFI_OBJECT_HANDLE_PTR],
  ],
  anoncreds_revocation_registry_definition_get_attribute: [
    FFI_ERRORCODE,
    [FFI_OBJECT_HANDLE, FFI_STRING, FFI_STRING_PTR],
  ],
  anoncreds_set_default_logger: [FFI_ERRORCODE, []],
  anoncreds_verify_presentation: [
    FFI_ERRORCODE,
    [
      FFI_OBJECT_HANDLE,
      FFI_OBJECT_HANDLE,
      ObjectHandleListStruct,
      StringListStruct,
      ObjectHandleListStruct,
      StringListStruct,
      ObjectHandleListStruct,
      StringListStruct,
      ObjectHandleListStruct,
      NonRevokedIntervalOverrideListStruct,
      FFI_INT8_PTR,
    ],
  ],
  anoncreds_create_revocation_status_list: [
    FFI_ERRORCODE,
    [FFI_STRING, FFI_OBJECT_HANDLE, FFI_STRING, FFI_INT64, FFI_INT8, FFI_OBJECT_HANDLE_PTR],
  ],
  anoncreds_update_revocation_status_list_timestamp_only: [
    FFI_ERRORCODE,
    [FFI_INT64, FFI_OBJECT_HANDLE, FFI_OBJECT_HANDLE_PTR],
  ],
  anoncreds_update_revocation_status_list: [
    FFI_ERRORCODE,
    [FFI_INT64, I32ListStruct, I32ListStruct, FFI_OBJECT_HANDLE, FFI_OBJECT_HANDLE, FFI_OBJECT_HANDLE_PTR],
  ],
  anoncreds_version: [FFI_STRING, []],
  anoncreds_credential_request_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_credential_request_metadata_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_presentation_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_credential_offer_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_revocation_registry_definition_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_revocation_registry_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_revocation_state_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_credential_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_credential_definition_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_credential_definition_private_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_revocation_registry_definition_private_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_revocation_registry_delta_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_key_correctness_proof_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
  anoncreds_schema_from_json: [FFI_ERRORCODE, [ByteBufferStruct, FFI_STRING_PTR]],
} as const
