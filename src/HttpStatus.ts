export class HttpStatus {
  static CONTINUE = new HttpStatus(100, 'Continue');
  static SWITCHING_PROTOCOLS = new HttpStatus(101, 'Switching Protocols');
  static PROCESSING = new HttpStatus(102, 'Processing');
  static EARLY_HINTS = new HttpStatus(103, 'Early Hints');

  static OK = new HttpStatus(200, 'OK');
  static CREATED = new HttpStatus(201, 'Created');
  static ACCEPTED = new HttpStatus(202, 'Accepted');
  static NON_AUTHORITATIVE_INFORMATION = new HttpStatus(203, 'Non-Authoritative Information');
  static NO_CONTENT = new HttpStatus(204, 'No Content');
  static RESET_CONTENT = new HttpStatus(205, 'Reset Content');
  static PARTIAL_CONTENT = new HttpStatus(206, 'Partial Content');
  static MULTI_STATUS = new HttpStatus(207, 'Multi-Status');
  static ALREADY_REPORTED = new HttpStatus(208, 'Already Reported');
  static IM_USED = new HttpStatus(226, 'IM Used');

  static MULTIPLE_CHOICES = new HttpStatus(300, 'Multiple Choices');
  static MOVED_PERMANENTLY = new HttpStatus(301, 'Moved Permanently');
  static FOUND = new HttpStatus(302, 'Found');
  static SEE_OTHER = new HttpStatus(303, 'See Other');
  static NOT_MODIFIED = new HttpStatus(304, 'Not Modified');
  static USE_PROXY = new HttpStatus(305, 'Use Proxy');
  static TEMPORARY_REDIRECT = new HttpStatus(307, 'Temporary Redirect');
  static PERMANENT_REDIRECT = new HttpStatus(308, 'Permanent Redirect');

  static BAD_REQUEST = new HttpStatus(400, 'Bad Request');
  static UNAUTHORIZED = new HttpStatus(401, 'Unauthorized');
  static PAYMENT_REQUIRED = new HttpStatus(402, 'Payment Required');
  static FORBIDDEN = new HttpStatus(403, 'Forbidden');
  static NOT_FOUND = new HttpStatus(404, 'Not Found');
  static METHOD_NOT_ALLOWED = new HttpStatus(405, 'Method Not Allowed');
  static NOT_ACCEPTABLE = new HttpStatus(406, 'Not Acceptable');
  static PROXY_AUTHENTICATION_REQUIRED = new HttpStatus(407, 'Proxy Authentication Required');
  static REQUEST_TIMEOUT = new HttpStatus(408, 'Request Timeout');
  static CONFLICT = new HttpStatus(409, 'Conflict');
  static GONE = new HttpStatus(410, 'Gone');
  static LENGTH_REQUIRED = new HttpStatus(411, 'Length Required');
  static PRECONDITION_FAILED = new HttpStatus(412, 'Precondition Failed');
  static CONTENT_TOO_LARGE = new HttpStatus(413, 'Content Too Large');
  static URI_TOO_LONG = new HttpStatus(414, 'URI Too Long');
  static UNSUPPORTED_MEDIA_TYPE = new HttpStatus(415, 'Unsupported Media Type');
  static RANGE_NOT_SATISFIABLE = new HttpStatus(416, 'Range Not Satisfiable');
  static EXPECTATION_FAILED = new HttpStatus(417, 'Expectation Failed');
  static IM_A_TEAPOT = new HttpStatus(418, "I'm a teapot");
  static MISDIRECTED_REQUEST = new HttpStatus(421, 'Misdirected Request');
  static UNPROCESSABLE_CONTENT = new HttpStatus(422, 'Unprocessable Content');
  static LOCKED = new HttpStatus(423, 'Locked');
  static FAILED_DEPENDENCY = new HttpStatus(424, 'Failed Dependency');
  static TOO_EARLY = new HttpStatus(425, 'Too Early');
  static UPGRADE_REQUIRED = new HttpStatus(426, 'Upgrade Required');
  static PRECONDITION_REQUIRED = new HttpStatus(428, 'Precondition Required');
  static TOO_MANY_REQUESTS = new HttpStatus(429, 'Too Many Requests');
  static REQUEST_HEADER_FIELDS_TOO_LARGE = new HttpStatus(431, 'Request Header Fields Too Large');
  static UNAVAILABLE_FOR_LEGAL_REASONS = new HttpStatus(451, 'Unavailable For Legal Reasons');

  static INTERNAL_SERVER_ERROR = new HttpStatus(500, 'Internal Server Error');
  static NOT_IMPLEMENTED = new HttpStatus(501, 'Not Implemented');
  static BAD_GATEWAY = new HttpStatus(502, 'Bad Gateway');
  static SERVICE_UNAVAILABLE = new HttpStatus(503, 'Service Unavailable');
  static GATEWAY_TIMEOUT = new HttpStatus(504, 'Gateway Timeout');
  static HTTP_VERSION_NOT_SUPPORTED = new HttpStatus(505, 'HTTP Version Not Supported');
  static VARIANT_ALSO_NEGOTIATES = new HttpStatus(506, 'Variant Also Negotiates');
  static INSUFFICIENT_STORAGE = new HttpStatus(507, 'Insufficient Storage');
  static LOOP_DETECTED = new HttpStatus(508, 'Loop Detected');
  static NOT_EXTENDED = new HttpStatus(510, 'Not Extended');
  static NETWORK_AUTHENTICATION_REQUIRED = new HttpStatus(511, 'Network Authentication Required');

  constructor(
    public code: number,
    public description: string = '',
  ) {}
}
