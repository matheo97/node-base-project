"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiDoc = {
    openapi: '3.0.0',
    info: {
        title: 'Restful backend v2 API',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Dev server',
        },
    ],
    components: {
        securitySchemes: {
            isSignedIn: {
                type: 'http',
                scheme: 'bearer',
            },
            isGroupMember: {
                type: 'http',
                scheme: 'bearer',
            },
            isAdmin: {
                type: 'http',
                scheme: 'bearer',
            },
            isEventAPI: {
                type: 'apiKey',
                in: 'header',
                name: 'x-api-key',
            },
            isTestingAPI: {
                type: 'apiKey',
                in: 'header',
                name: 'x-api-key',
            },
            isExternalAPI: {
                type: 'apiKey',
                in: 'header',
                name: 'x-api-key',
            },
            isSelf: {
                type: 'http',
                scheme: 'bearer',
            },
            isAdminOfSecurityGroup: {
                type: 'http',
                scheme: 'bearer',
            },
            isActivationUser: {
                type: 'http',
                scheme: 'bearer',
            },
            otherSecondFactor: {
                type: 'apiKey',
                in: 'header',
                name: 'second-factor',
            },
        },
        requestBodies: {
            ExecuteRepeatingPhishingCampaign: {
                required: true,
                description: 'The id of group, which is going to be receiving RA emails (frequency defined in DB)',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                group_id: {
                                    type: 'string',
                                },
                            },
                            required: ['group_id'],
                        },
                    },
                },
            },
            ExecuteReportEvent: {
                required: true,
                description: 'The id of group, whose admins will receive report',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                group_id: {
                                    type: 'string',
                                },
                                duration_in_days: {
                                    type: 'number',
                                },
                            },
                            required: ['group_id', 'duration_in_days'],
                        },
                    },
                },
            },
        },
        responses: {
            Error: {
                description: 'Operation error',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                code: {
                                    type: 'string',
                                },
                                message: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
            Success: {
                description: 'Operation Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Success',
                        },
                    },
                },
            },
        },
        parameters: {
            PdfKey: {
                name: 'key',
                in: 'path',
                schema: {
                    type: 'string',
                },
            },
            Type: {
                name: 'type',
                in: 'query',
                schema: {
                    type: 'string',
                },
            },
            Domain: {
                name: 'domain',
                in: 'query',
                schema: {
                    type: 'string',
                },
            },
            ClientId: {
                name: 'client_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            Code: {
                name: 'code',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            Redirect: {
                name: 'redirect',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            RedirectLink: {
                name: 'redirect',
                in: 'query',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            Email: {
                name: 'email',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            Password: {
                name: 'password',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            NotificationId: {
                name: 'notification_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            TrainingModuleParam: {
                name: 'training_module',
                in: 'path',
                required: true,
                schema: {
                    $ref: '#/components/schemas/TrainingModule',
                },
            },
            EmailInspector: {
                name: 'email',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            UsernameHash: {
                name: 'username_hash',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            IsDelete: {
                name: 'is_delete',
                in: 'path',
                required: true,
                schema: {
                    type: 'boolean',
                },
            },
            IsLocal: {
                name: 'is_local',
                in: 'query',
                schema: {
                    type: 'boolean',
                },
            },
            GroupId: {
                name: 'group_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            PolicyId: {
                name: 'policy_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            InitKey: {
                name: 'init_key',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            DocType: {
                name: 'doc_type',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                    enum: ['application', 'policy', 'statement'],
                },
            },
            CredentialId: {
                name: 'credential_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            TemplateId: {
                name: 'template_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
            },
            TemplateEventId: {
                name: 'template_event_id',
                in: 'query',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            UserId: {
                name: 'user_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            RedeemedAt: {
                name: 'redeemed_at',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
            StartDateTime: {
                name: 'start',
                description: 'Start of datetime argument',
                in: 'query',
                required: true,
                schema: {
                    $ref: '#/components/schemas/DateTime',
                },
            },
            EndDateTime: {
                name: 'end',
                required: true,
                description: 'End of datetime argument',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/DateTime',
                },
            },
            StartDateTimeOptional: {
                name: 'start',
                description: 'Start of datetime argument',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/DateTime',
                },
            },
            EndDateTimeOptional: {
                name: 'end',
                description: 'End of datetime argument',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/DateTime',
                },
            },
            TimeUnit: {
                name: 'unit',
                description: 'Unit of time measurement',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/TimeUnit',
                },
            },
            LinkId: {
                name: 'link_id',
                in: 'path',
                required: true,
                schema: {
                    type: 'string',
                },
            },
        },
        schemas: {
            strings: {
                type: 'array',
                items: {
                    type: 'string',
                },
                uniqueItems: true,
            },
            CyberRiskRequest: {
                type: 'object',
                properties: {
                    emails: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    domain: {
                        type: 'string',
                    },
                },
                required: [
                    'domain',
                ],
            },
            PDFResultsEndpoint: {
                type: 'object',
                properties: {
                    resultsEndpoint: {
                        type: 'string',
                    },
                },
                required: [
                    'resultsEndpoint',
                ],
            },
            GroupCredentialData: {
                type: 'object',
                properties: {
                    credentialMetadata: {
                        $ref: '#/components/schemas/CredentialMetadataArray',
                    },
                    encryptedGroupKey: {
                        type: 'string',
                    },
                },
                required: [
                    'credentialMetadata',
                    'encryptedGroupKey',
                ],
            },
            UserCredentialData: {
                type: 'object',
                properties: {
                    encrypted_data_key: {
                        type: 'string',
                    },
                    salt: {
                        type: 'string',
                    },
                    credentials: {
                        $ref: '#/components/schemas/UserCredentials',
                    },
                    credentialMetadata: {
                        $ref: '#/components/schemas/CredentialMetadataArray',
                    },
                },
            },
            CredentialMetadata: {
                type: 'object',
                allOf: [
                    {
                        type: 'object',
                        properties: {
                            domain: {
                                type: 'string',
                            },
                            salt: {
                                type: 'string',
                            },
                            metadata: {
                                type: 'string',
                                nullable: true,
                            },
                        },
                        required: ['domain', 'salt'],
                    },
                    {
                        $ref: '#/components/schemas/CreatedAt',
                    },
                    {
                        $ref: '#/components/schemas/ModifiedAt',
                    },
                ],
            },
            CredentialMetadataArray: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/CredentialMetadata',
                },
            },
            UserCredential: {
                type: 'object',
                properties: {
                    domain: {
                        type: 'string',
                    },
                    username_hash: {
                        type: 'string',
                    },
                    encrypted_credential: {
                        type: 'string',
                        nullable: true,
                    },
                    hashed_credential: {
                        type: 'string',
                    },
                    is_local: {
                        type: 'boolean',
                    },
                },
                required: ['domain', 'username_hash'],
            },
            UserCredentials: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/UserCredential',
                },
            },
            ChangePassword: {
                type: 'object',
                properties: {
                    newPassword: {
                        type: 'string',
                    },
                    oldPassword: {
                        type: 'string',
                    },
                    purgeOldPasswords: {
                        type: 'boolean',
                    },
                },
                required: ['newPassword'],
            },
            UserKeys: {
                type: 'object',
                properties: {
                    encrypted_data_key: {
                        type: 'string',
                    },
                    salt: {
                        type: 'string',
                    },
                    public_key: {
                        type: 'string',
                        nullable: true,
                    },
                    encrypted_priv_key: {
                        type: 'string',
                        nullable: true,
                    },
                },
                required: ['encrypted_data_key', 'salt', 'public_key', 'encrypted_priv_key'],
            },
            ZXCVBNScore: {
                type: 'integer',
                enum: [0, 1, 2, 3, 4],
            },
            ZXCVBNFeedback: {
                type: 'object',
                properties: {
                    warning: {
                        type: 'string',
                    },
                    suggestions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
            ZXCVBNAttackTime: {
                type: 'object',
                properties: {
                    online_throttling_100_per_hour: {
                        type: 'integer',
                    },
                    online_no_throttling_10_per_second: {
                        type: 'integer',
                    },
                    offline_slow_hashing_1e4_per_second: {
                        type: 'integer',
                    },
                    offline_fast_hashing_1e10_per_second: {
                        type: 'integer',
                    },
                },
            },
            ZXCVBNSequence: {
                type: 'object',
                properties: {
                    ascending: {
                        type: 'boolean',
                    },
                    base_guesses: {
                        type: 'integer',
                    },
                    base_matches: {
                        type: 'string',
                    },
                    base_token: {
                        type: 'string',
                    },
                    dictionary_name: {
                        type: 'string',
                    },
                    guesses: {
                        type: 'integer',
                    },
                    guesses_log10: {
                        type: 'integer',
                    },
                    i: {
                        type: 'integer',
                    },
                    j: {
                        type: 'integer',
                    },
                    l33t: {
                        type: 'boolean',
                    },
                    l33t_variations: {
                        type: 'integer',
                    },
                    matched_word: {
                        type: 'string',
                    },
                    pattern: {
                        type: 'string',
                    },
                    rank: {
                        type: 'integer',
                    },
                    repeat_count: {
                        type: 'integer',
                    },
                    reversed: {
                        type: 'boolean',
                    },
                    sequence_name: {
                        type: 'string',
                    },
                    sequence_space: {
                        type: 'integer',
                    },
                    token: {
                        type: 'string',
                    },
                    uppercase_variations: {
                        type: 'integer',
                    },
                },
            },
            ZXCVBNResult: {
                type: 'object',
                properties: {
                    guesses: {
                        type: 'integer',
                    },
                    guesses_log10: {
                        type: 'integer',
                    },
                    crack_times_seconds: {
                        $ref: '#/components/schemas/ZXCVBNAttackTime',
                    },
                    crack_times_display: {
                        $ref: '#/components/schemas/ZXCVBNAttackTime',
                    },
                    score: {
                        $ref: '#/components/schemas/ZXCVBNScore',
                    },
                    feedback: {
                        $ref: '#/components/schemas/ZXCVBNFeedback',
                    },
                    sequence: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/ZXCVBNSequence',
                        },
                    },
                    calc_time: {
                        type: 'integer',
                    },
                },
            },
            DmarcRecord: {
                type: 'object',
                properties: {
                    v: {
                        type: 'string',
                    },
                    pct: {
                        type: 'string',
                    },
                    ruf: {
                        type: 'string',
                    },
                    rua: {
                        type: 'string',
                    },
                    p: {
                        type: 'string',
                    },
                    sp: {
                        type: 'string',
                    },
                    adkim: {
                        type: 'string',
                    },
                    aspf: {
                        type: 'string',
                    },
                },
            },
            EmailInspectorEmailResults: {
                type: 'object',
                properties: {
                    affectedDataInBreaches: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    breaches: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: [
                                'amount',
                                'name',
                                'year',
                            ],
                            properties: {
                                amount: {
                                    type: 'integer',
                                },
                                name: {
                                    type: 'string',
                                },
                                year: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
            EmailInspectorDomainResults: {
                type: 'object',
                required: [
                    'checks',
                ],
                properties: {
                    checks: {
                        type: 'object',
                        required: [
                            'dmarc',
                            'smtp',
                            'spf',
                        ],
                        properties: {
                            dmarc: {
                                type: 'object',
                                required: [
                                    'dmarcExists',
                                ],
                                properties: {
                                    dmarcPolicy: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                    dmarcExists: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                },
                            },
                            smtp: {
                                type: 'object',
                                required: [
                                    'allHaveStartTls',
                                    'haveIPv4IPv6',
                                    'serverDiffIPv4Subnet',
                                    'serverDiffIPv6Subnet',
                                    'serversAllUp',
                                ],
                                properties: {
                                    allHaveStartTls: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                    haveIPv4IPv6: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                    serverDiffIPv4Subnet: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                    serverDiffIPv6Subnet: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                    serversAllUp: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                },
                            },
                            spf: {
                                type: 'object',
                                required: [
                                    'spfExists',
                                ],
                                properties: {
                                    spfExists: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                    defaultSpfAction: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                    hasTopAllMechanism: {
                                        $ref: '#/components/schemas/InspectorScore',
                                    },
                                },
                            },
                        },
                    },
                    records: {
                        type: 'object',
                        required: [
                            'dmarc',
                            'spf',
                        ],
                        properties: {
                            dmarc: {
                                $ref: '#/components/schemas/DmarcRecord',
                            },
                            spf: {
                                type: 'array',
                                items: {
                                    $ref: '#/components/schemas/SpfRecord',
                                },
                            },
                            smtp: {
                                $ref: '#/components/schemas/SmtpRecord',
                            },
                        },
                    },
                    domain: {
                        type: 'string',
                    },
                },
            },
            SpfRecord: {
                type: 'object',
                properties: {
                    orig: {
                        type: 'string',
                    },
                    qualifier: {
                        type: 'string',
                    },
                    err: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                        nullable: true,
                    },
                    mechanism: {
                        type: 'string',
                    },
                    directive: {
                        type: 'string',
                    },
                },
            },
            ServerIp: {
                type: 'object',
                properties: {
                    checks: {
                        type: 'object',
                        properties: {
                            serverFailure: {
                                type: 'boolean',
                            },
                            haveStartTls: {
                                type: 'boolean',
                            },
                        },
                        required: [
                            'serverFailure',
                        ],
                    },
                    caps: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                required: [
                    'checks',
                ],
            },
            ServerIps: {
                type: 'object',
                additionalProperties: {
                    $ref: '#/components/schemas/ServerIp',
                },
            },
            SmtpRecord: {
                type: 'object',
                additionalProperties: {
                    type: 'object',
                    properties: {
                        ServerIps: {
                            $ref: '#/components/schemas/ServerIps',
                        },
                    },
                    required: ['ServerIps'],
                },
            },
            NewGroup: {
                type: 'object',
                properties: {
                    group_name: {
                        type: 'string',
                    },
                },
                required: ['group_name'],
            },
            NewSecurityGroup: {
                type: 'object',
                properties: {
                    group_name: {
                        type: 'string',
                    },
                    risk_assessment_id: {
                        type: 'string',
                    },
                },
                required: [
                    'group_name',
                ],
            },
            StatusCode: {
                type: 'integer',
            },
            UserId: {
                type: 'string',
            },
            UserIdOrEmail: {
                type: 'string',
            },
            WebResource: {
                type: 'object',
                properties: {
                    url: {
                        type: 'string',
                    },
                },
            },
            EmailAnalysis: {
                type: 'object',
                properties: {
                    score: {
                        type: 'number',
                    },
                    reasons: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    dam_recommendation: {
                        $ref: '#/components/schemas/DamRecommendation',
                    },
                },
            },
            DamRecommendation: {
                type: 'object',
                properties: {
                    flag_type: {
                        type: 'string',
                    },
                    message: {
                        type: 'string',
                    },
                },
            },
            RequiredDamRecommendation: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/DamRecommendation',
                    },
                ],
                required: [
                    'flag_type',
                    'message',
                ],
            },
            AccessToken: {
                type: 'object',
                properties: {
                    access_token: {
                        type: 'string',
                    },
                    expire_at: {
                        type: 'string',
                        format: 'date-time',
                    },
                },
            },
            EmailInspector: {
                type: 'object',
                properties: {
                    breachData: {
                        type: 'object',
                        properties: {
                            affected_data_in_breaches: {
                                type: 'string',
                            },
                        },
                    },
                    breaches: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                            },
                            year: {
                                type: 'string',
                            },
                            amount: {
                                type: 'number',
                            },
                        },
                    },
                },
            },
            SignInToken: {
                type: 'object',
                properties: {
                    sign_in_token: {
                        type: 'string',
                    },
                },
                required: [
                    'sign_in_token',
                ],
            },
            TriggerEmail: {
                type: 'object',
                properties: {
                    group_id: {
                        type: 'string',
                    },
                    metadata: {
                        type: 'string',
                        format: '',
                    },
                    template_icon: {
                        type: 'string',
                    },
                    template_name: {
                        type: 'string',
                    },
                    template_id: {
                        type: 'string',
                    },
                },
            },
            PhishingSimTemplate: {
                allOf: [{
                        type: 'object',
                        properties: {
                            description: {
                                type: 'string',
                            },
                            preview: {
                                type: 'string',
                            },
                            template_icon: {
                                type: 'string',
                            },
                            template_name: {
                                type: 'string',
                            },
                            template_id: {
                                type: 'string',
                            },
                            relative_path: {
                                type: 'string',
                            },
                        },
                        required: ['description', 'preview', 'template_icon', 'template_name', 'template_id', 'relative_path'],
                    }, {
                        $ref: '#/components/schemas/CreatedAt',
                    }, {
                        $ref: '#/components/schemas/ModifiedAt',
                    }],
            },
            FullPhishingSimTemplate: {
                allOf: [{
                        type: 'object',
                        properties: {
                            is_disabled: {
                                type: 'boolean',
                            },
                        },
                        required: ['description', 'preview', 'template_icon', 'template_name', 'template_id'],
                    }, {
                        $ref: '#/components/schemas/PhishingSimTemplate',
                    }],
            },
            NewNotification: {
                type: 'object',
                properties: {
                    body: {
                        type: 'string',
                    },
                    notification_type: {
                        type: 'string',
                    },
                },
                required: ['body', 'notification_type'],
            },
            NewPolicy: {
                type: 'object',
                properties: {
                    agg_claims_made_limit: {
                        type: 'number',
                    },
                    aggregate_first_party_limit: {
                        type: 'number',
                    },
                    business_interrup_limit: {
                        type: 'number',
                    },
                    business_interrup_wait: {
                        type: 'number',
                    },
                    claims_made_liability_limit: {
                        type: 'number',
                    },
                    crisis_management_limit: {
                        type: 'number',
                    },
                    cyber_event_limit: {
                        type: 'number',
                    },
                    data_recovery_limit: {
                        type: 'number',
                    },
                    deductible: {
                        type: 'number',
                    },
                    dependent_business_interrup_limit: {
                        type: 'number',
                    },
                    extortion_limit: {
                        type: 'number',
                    },
                    first_party_limit: {
                        type: 'number',
                    },
                    forensic_and_legal_limit: {
                        type: 'number',
                    },
                    fraud_response_limit: {
                        type: 'number',
                    },
                    group_id: {
                        type: 'string',
                    },
                    industry: {
                        type: 'string',
                    },
                    media_limit: {
                        type: 'number',
                    },
                    partner_id: {
                        type: 'string',
                        nullable: true,
                    },
                    pcidss_limit: {
                        type: 'number',
                    },
                    policy_end: {
                        type: 'string',
                    },
                    policy_id: {
                        type: 'string',
                    },
                    policy_limit: {
                        type: 'number',
                    },
                    policy_start: {
                        type: 'string',
                    },
                    policy_type: {
                        type: 'string',
                    },
                    privacy_liability_limit: {
                        type: 'number',
                    },
                    public_relations_limit: {
                        type: 'number',
                    },
                    ransomware_limit: {
                        type: 'number',
                    },
                    revenue: {
                        type: 'number',
                    },
                    risk_level: {
                        type: 'number',
                    },
                    salesperson_id: {
                        type: 'string',
                        nullable: true,
                    },
                    social_engineering_limit: {
                        type: 'number',
                    },
                    telecomm_limit: {
                        type: 'number',
                    },
                    total_premium: {
                        type: 'number',
                    },
                },
                required: [
                    'agg_claims_made_limit',
                    'aggregate_first_party_limit',
                    'business_interrup_limit',
                    'business_interrup_wait',
                    'claims_made_liability_limit',
                    'crisis_management_limit',
                    'cyber_event_limit',
                    'data_recovery_limit',
                    'deductible',
                    'dependent_business_interrup_limit',
                    'extortion_limit',
                    'first_party_limit',
                    'forensic_and_legal_limit',
                    'fraud_response_limit',
                    'group_id',
                    'industry',
                    'media_limit',
                    'partner_id',
                    'pcidss_limit',
                    'policy_end',
                    'policy_id',
                    'policy_limit',
                    'policy_start',
                    'policy_type',
                    'privacy_liability_limit',
                    'public_relations_limit',
                    'ransomware_limit',
                    'revenue',
                    'risk_level',
                    'salesperson_id',
                    'social_engineering_limit',
                    'telecomm_limit',
                    'total_premium',
                ],
            },
            NewUserNotification: {
                allOf: [{
                        type: 'object',
                        properties: {
                            group_id: {
                                type: 'string',
                                nullable: true,
                            },
                            user_type: {
                                description: 'Type of user (needed to determin which app to redirect to)',
                                type: 'string',
                                enum: ['admin', 'employee'],
                                default: 'employee',
                            },
                            sender_name: {
                                description: 'Name of the email sender (for the onboarding flow)',
                                type: 'string',
                            },
                            run_at: {
                                type: 'number',
                            },
                            policy_id: {
                                type: 'string',
                            },
                            activation_code: {
                                type: 'string',
                            },
                            sender_user_id: {
                                type: 'string',
                            },
                        },
                    }, {
                        $ref: '#/components/schemas/NewNotification',
                    }],
            },
            NewGroupNotification: {
                allOf: [{
                        type: 'object',
                        properties: {
                            user_id: {
                                type: 'string',
                                nullable: true,
                            },
                        },
                        required: ['user_id'],
                    }, {
                        $ref: '#/components/schemas/NewNotification',
                    }],
            },
            DatabaseNewGroupNotification: {
                allOf: [
                    {
                        type: 'object',
                        properties: {
                            group_id: {
                                type: 'string',
                            },
                        },
                        required: ['group_id'],
                    },
                    {
                        $ref: '#/components/schemas/NewGroupNotification',
                    },
                ],
            },
            ListNotificationQuery: {
                type: 'object',
                properties: {
                    group_id: {
                        type: 'string',
                    },
                    user_id: {
                        type: 'string',
                    },
                    start: {
                        type: 'string',
                    },
                    end: {
                        type: 'string',
                    },
                    notification_type: {
                        type: 'string',
                    },
                },
                required: [
                    'start',
                    'end',
                    'notification_type',
                ],
                minProperties: 4,
                maxProperties: 4,
                additionalProperties: false,
            },
            SecondFactor: {
                type: 'object',
                properties: {
                    secret: {
                        description: 'Shared secret',
                        type: 'string',
                    },
                    totp: {
                        description: 'One time passcode',
                        type: 'string',
                    },
                },
                required: ['secret', 'totp'],
            },
            UploadMembers: {
                type: 'object',
                properties: {
                    fileName: {
                        type: 'string',
                        format: 'binary',
                    },
                },
            },
            ResolveNotification: {
                type: 'object',
                properties: {
                    note_id: {
                        type: 'string',
                    },
                    is_resolved: {
                        type: 'boolean',
                    },
                },
                required: ['note_id', 'is_resolved'],
            },
            InspectorScore: {
                type: 'object',
                properties: {
                    score: {
                        type: 'integer',
                    },
                    pinDomainScore: {
                        type: 'integer',
                    },
                },
                required: ['score'],
            },
            FullNotification: {
                type: 'object',
                allOf: [
                    {
                        type: 'object',
                        properties: {
                            user_id: {
                                type: 'string',
                                nullable: true,
                            },
                            group_id: {
                                type: 'string',
                                nullable: true,
                            },
                            note_id: {
                                type: 'string',
                                nullable: true,
                            },
                            is_resolved: {
                                type: 'boolean',
                            },
                        },
                        required: ['user_id', 'group_id', 'note_id', 'is_resolved'],
                    },
                    {
                        $ref: '#/components/schemas/CreatedAt',
                    },
                    {
                        $ref: '#/components/schemas/ModifiedAt',
                    },
                    {
                        $ref: '#/components/schemas/NewNotification',
                    },
                ],
            },
            Success: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean',
                        description: 'You probably did something wrong if you set this to false.',
                        default: true,
                    },
                },
            },
            Address: {
                type: 'object',
                properties: {
                    address_1: {
                        type: 'string',
                    },
                    address_2: {
                        type: 'string',
                        nullable: true,
                    },
                    city: {
                        type: 'string',
                    },
                    state: {
                        type: 'string',
                    },
                    zip: {
                        type: 'string',
                    },
                },
                required: ['address_1', 'address_2', 'city', 'state', 'zip'],
            },
            AnalyticEvent: {
                type: 'object',
                properties: {
                    event_type: {
                        type: 'string',
                    },
                    raw: {
                        type: 'string',
                        format: 'json',
                        nullable: true,
                    },
                },
                required: ['event_type', 'raw'],
            },
            UserAnalyticsEvent: {
                allOf: [{
                        $ref: '#/components/schemas/AnalyticEvent',
                    }, {
                        type: 'object',
                        properties: {
                            group_id: {
                                type: 'string',
                                nullable: true,
                            },
                        },
                        required: ['group_id'],
                    }],
            },
            GroupAnalyticsEvent: {
                allOf: [{
                        $ref: '#/components/schemas/AnalyticEvent',
                    }, {
                        type: 'object',
                        properties: {
                            user_id: {
                                type: 'string',
                                nullable: true,
                            },
                            unique: {
                                type: 'boolean',
                            },
                        },
                        required: ['user_id'],
                    }],
            },
            FullAnalyticEvent: {
                allOf: [{
                        $ref: '#/components/schemas/AnalyticEvent',
                    }, {
                        $ref: '#/components/schemas/CreatedAt',
                    }, {
                        type: 'object',
                        properties: {
                            user_id: {
                                type: 'string',
                                nullable: true,
                            },
                            group_id: {
                                type: 'string',
                                nullable: true,
                            },
                        },
                        required: ['user_id', 'group_id'],
                    }],
            },
            PhishEvent: {
                type: 'object',
                properties: {
                    body: {
                        type: 'string',
                    },
                    subject: {
                        type: 'string',
                    },
                    headers: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    attachments: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                required: ['body', 'subject', 'headers'],
            },
            SecurityEvent: {
                type: 'object',
                properties: {
                    event_origin: {
                        description: 'URL',
                        type: 'string',
                    },
                    event_type: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                },
                required: ['event_origin', 'event_type', 'description'],
            },
            FullSecurityEvent: {
                allOf: [{
                        type: 'object',
                        properties: {
                            event_origin: {
                                description: 'URL',
                                type: 'string',
                            },
                            event_type: {
                                type: 'string',
                            },
                            description: {
                                type: 'string',
                            },
                        },
                        required: ['event_origin', 'event_type', 'description'],
                    }, {
                        $ref: '#/components/schemas/CreatedAt',
                    }],
            },
            UserPhishingEvent: {
                allOf: [{
                        type: 'object',
                        properties: {
                            user_id: {
                                type: 'string',
                            },
                            template_id: {
                                type: 'string',
                            },
                            sent_at: {
                                type: 'string',
                                format: 'date-time',
                            },
                            opened_at: {
                                type: 'string',
                                format: 'date-time',
                            },
                            clicked_at: {
                                type: 'string',
                                format: 'date-time',
                            },
                            failed_at: {
                                type: 'string',
                                format: 'date-time',
                            },
                        },
                        required: ['template_id'],
                    }, {
                        $ref: '#/components/schemas/User',
                    }, {
                        $ref: '#/components/schemas/FullUserProfile',
                    }],
            },
            OnboardMember: {
                type: 'object',
                properties: {
                    user: {
                        $ref: '#/components/schemas/UserProfileCreate',
                    },
                    notifications: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/NewUserNotification',
                        },
                    },
                },
                required: ['user', 'notifications'],
            },
            OnboardMembers: {
                type: 'array',
                description: 'Array of member (user) details for bulk onboarding',
                items: {
                    $ref: '#/components/schemas/OnboardMember',
                },
            },
            HistoricalCyberScore: {
                type: 'array',
                description: 'Array of historical cyber score values',
                items: {
                    $ref: '#/components/schemas/CyberScore',
                },
            },
            UserCyberScore: {
                allOf: [{
                        $ref: '#/components/schemas/CyberScore',
                    }, {
                        $ref: '#/components/schemas/User',
                    }],
            },
            GroupCyberScore: {
                allOf: [{
                        $ref: '#/components/schemas/CyberScore',
                    }, {
                        $ref: '#/components/schemas/Group',
                    }],
            },
            CombinedCyberScore: {
                type: 'object',
                properties: {
                    group: {
                        $ref: '#/components/schemas/GroupCyberScore',
                    },
                    users: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/UserCyberScore',
                        },
                    },
                },
                required: [
                    'group',
                    'users',
                ],
            },
            CyberScore: {
                type: 'object',
                properties: {
                    web_traffic_security_value: {
                        description: 'Score of web traffic security',
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    },
                    inbox_protection_value: {
                        description: 'Score of inbox security',
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    },
                    training_progress_value: {
                        description: 'Score of training progress',
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    },
                    cyber_risk_value: {
                        description: 'Score of combined cyber risk',
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    },
                    protection_value: {
                        description: 'Score of combined protection',
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    },
                    overall_score: {
                        description: 'Overall score taking protections and risk into account',
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    },
                    interval_start: {
                        description: 'The start of the time interval these scores represent',
                        type: 'string',
                        format: 'date-time',
                    },
                },
                required: [
                    'web_traffic_security_value',
                    'inbox_protection_value',
                    'training_progress_value',
                    'cyber_risk_value',
                    'protection_value',
                    'overall_score',
                ],
            },
            ElfEntry: {
                type: 'object',
                properties: {
                    url: {
                        type: 'string',
                    },
                    classification: {
                        type: 'string',
                        nullable: true,
                    },
                    subclassification: {
                        type: 'string',
                    },
                },
                required: ['url', 'classification', 'subclassification'],
            },
            FullElfEntry: {
                type: 'object',
                allOf: [{
                        $ref: '#/components/schemas/ElfEntry',
                    }, {
                        type: 'object',
                        properties: {
                            user_id: {
                                type: 'string',
                                nullable: true,
                            },
                            is_approved: {
                                type: 'boolean',
                            },
                        },
                        required: ['is_approved', 'user_id'],
                    }],
            },
            DateTime: {
                description: 'Time argument',
                type: 'string',
                format: 'date-time',
            },
            DateTimeNullable: {
                description: 'Time argument',
                type: 'string',
                format: 'date-time',
                nullable: true,
            },
            TimeUnit: {
                description: 'A unit of time measurement',
                type: 'string',
                enum: ['hour', 'day', 'week', 'month'],
                default: 'day',
            },
            CreatedAt: {
                type: 'object',
                properties: {
                    created_at: {
                        description: 'Date created',
                        type: 'string',
                        format: 'date-time',
                    },
                },
                required: ['created_at'],
            },
            CompletedAt: {
                type: 'object',
                properties: {
                    completed_at: {
                        description: 'Date completed',
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                },
                required: ['completed_at'],
            },
            ModifiedAt: {
                type: 'object',
                properties: {
                    modified_at: {
                        description: 'Date modified',
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                },
                required: ['modified_at'],
            },
            LastTriggeredAt: {
                type: 'object',
                properties: {
                    last_triggered_at: {
                        description: 'Date created',
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                },
                required: ['last_triggered_at'],
            },
            OnboardingFunnelForm: {
                type: 'object',
                properties: {
                    user_id: {
                        description: 'Id of the user in the activation code',
                        type: 'string',
                    },
                    fname: {
                        description: 'Fname of the user in the activation code',
                        type: 'string',
                    },
                    lname: {
                        description: 'Lname of the user in the activation code',
                        type: 'string',
                    },
                    email: {
                        description: 'Email of the user in the activation code',
                        type: 'string',
                    },
                    group_id: {
                        description: 'Group of the user in the activation code',
                        type: 'string',
                    },
                    group_name: {
                        description: 'Name of the group in the activation code',
                        type: 'string',
                    },
                },
                required: [
                    'fname',
                    'lname',
                    'email',
                    'group_name',
                ],
            },
            OnboardingFunnelFormUpdate: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/OnboardingFunnelForm',
                    },
                    {
                        type: 'object',
                        properties: {
                            password: {
                                type: 'string',
                            },
                        },
                        required: ['password'],
                    },
                ],
            },
            ActivationCode: {
                type: 'object',
                properties: {
                    code: {
                        description: 'Code of the activation code',
                        type: 'string',
                    },
                    type: {
                        description: 'Type of the activation code',
                        type: 'string',
                    },
                    partner_id: {
                        description: 'partner_id of the activation code',
                        type: 'string',
                    },
                    created_at: {
                        $ref: '#/components/schemas/CreatedAt',
                    },
                    group_id: {
                        description: 'group_id of the activation code',
                        type: 'string',
                    },
                    user_id: {
                        $ref: '#/components/schemas/UserId',
                    },
                    redeemed_at: {
                        description: 'Date redeemed of the activation code',
                        type: 'string',
                        format: 'date-time',
                    },
                    completed_at: {
                        description: 'Date completed of the activation code',
                        type: 'string',
                        format: 'date-time',
                    },
                },
                required: [
                    'code',
                    'type',
                    'partner_id',
                ],
            },
            Group: {
                allOf: [{
                        type: 'object',
                        properties: {
                            group_id: {
                                type: 'string',
                            },
                        },
                        required: ['group_id'],
                    }, {
                        $ref: '#/components/schemas/CreatedAt',
                    }],
            },
            FullGroup: {
                allOf: [{
                        type: 'object',
                        properties: {
                            group_type: {
                                description: 'The type of group',
                                type: 'string',
                            },
                            group_name: {
                                description: 'The name of group',
                                type: 'string',
                            },
                        },
                        required: ['group_type', 'group_name'],
                    }, {
                        $ref: '#/components/schemas/Group',
                    }],
            },
            Quote: {
                allOf: [{
                        type: 'object',
                        properties: {},
                        required: ['created_at', 'modified_at'],
                    }, {
                        $ref: '#/components/schemas/CreatedAt',
                    },
                    {
                        $ref: '#/components/schemas/ModifiedAt',
                    }],
            },
            SecurityGroupOnboardStatus: {
                type: 'object',
                properties: {
                    onboard_added_members: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                },
                required: ['onboard_added_members'],
            },
            FullSecurityGroupSettings: {
                allOf: [{
                        $ref: '#/components/schemas/SecurityGroupSettings',
                    }, {
                        $ref: '#/components/schemas/SecurityGroupOnboardStatus',
                    }, {
                        $ref: '#/components/schemas/RiskAssessmentReturnSettings',
                    }, {
                        $ref: '#/components/schemas/Group',
                    }],
            },
            UpdateSecurityGroupSettings: {
                type: 'object',
                allOf: [{
                        $ref: '#/components/schemas/SecurityGroupSettings',
                    }, {
                        type: 'object',
                        properties: {
                            allow_content_override: {
                                description: 'Allow content override',
                                type: 'boolean',
                            },
                            allow_malicious_override: {
                                description: 'Allow malicious override',
                                type: 'boolean',
                            },
                            phishing_sim_freq: {
                                description: 'The frequency that the simulation is run. Format is datetime INTERVAL',
                                type: 'string',
                            },
                            phishing_sim_on: {
                                description: 'Whether the simulation is enabled for this risk assessment group',
                                type: 'boolean',
                            },
                        },
                    }],
            },
            EncryptedCredential: {
                type: 'object',
                properties: {
                    encrypted_credential: {
                        type: 'string',
                    },
                },
                required: ['encrypted_credential'],
            },
            IsDeleteCredentials: {
                type: 'object',
                properties: {
                    encrypted_credential: {
                        type: 'string',
                    },
                    hashed_credential: {
                        type: 'string',
                    },
                    is_local: {
                        type: 'boolean',
                    },
                    is_delete: {
                        type: 'boolean',
                        default: false,
                    },
                },
            },
            RiskAssessmentReturnSettings: {
                type: 'object',
                properties: {
                    phishing_sim_freq: {
                        description: 'The frequency that the simulation is run. Format is parsed PG INTERVAL',
                        type: 'object',
                        properties: {
                            years: {
                                type: 'number',
                            },
                            months: {
                                type: 'number',
                            },
                            days: {
                                type: 'number',
                            },
                            hours: {
                                type: 'number',
                            },
                            minutes: {
                                type: 'number',
                            },
                            seconds: {
                                type: 'number',
                            },
                            milliseconds: {
                                type: 'number',
                            },
                        },
                    },
                    phishing_sim_on: {
                        description: 'Whether the simulation is enabled for this risk assessment group',
                        type: 'boolean',
                    },
                    onboard_added_members: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    onboard_whitelist_sent_at: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    onboard_whitelist_sent_user: {
                        type: 'string',
                        nullable: true,
                    },
                    onboard_whitelist_done_at: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    onboard_whitelist_done_user: {
                        type: 'string',
                        nullable: true,
                    },
                    onboard_whitelist_verified: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    trial_status: {
                        type: 'string',
                        anyOf: [
                            {
                                type: 'string',
                                enum: ['pending', 'in_progress', 'started', 'completed'],
                            },
                            {
                                nullable: true,
                            },
                        ],
                        nullable: true,
                    },
                },
            },
            RiskAssessmentSettings: {
                type: 'object',
                properties: {
                    phishing_sim_freq: {
                        description: 'The frequency that the simulation is run. Format is parsed PG INTERVAL',
                        type: 'string',
                    },
                    phishing_sim_on: {
                        description: 'Whether the simulation is enabled for this risk assessment group',
                        type: 'boolean',
                    },
                    onboard_added_members: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    onboard_whitelist_sent_at: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    onboard_whitelist_sent_user: {
                        type: 'string',
                        nullable: true,
                    },
                    onboard_whitelist_done_at: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    onboard_whitelist_done_user: {
                        type: 'string',
                        nullable: true,
                    },
                    onboard_whitelist_verified: {
                        type: 'string',
                        format: 'date-time',
                        nullable: true,
                    },
                    trial_status: {
                        type: 'string',
                        anyOf: [
                            {
                                type: 'string',
                                enum: ['pending', 'in_progress', 'started', 'completed'],
                            },
                            {
                                nullable: true,
                            },
                        ],
                        nullable: true,
                    },
                },
            },
            FullRiskAssessmentReturnSettings: {
                allOf: [{
                        type: 'object',
                        properties: {
                            group_id: {
                                description: 'The group id',
                                type: 'string',
                            },
                        },
                    }, {
                        $ref: '#/components/schemas/RiskAssessmentReturnSettings',
                    }, {
                        $ref: '#/components/schemas/LastTriggeredAt',
                    }, {
                        required: ['phishing_sim_freq', 'phishing_sim_on', 'group_id'],
                    }],
            },
            FullRiskAssessmentSettings: {
                allOf: [{
                        type: 'object',
                        properties: {
                            group_id: {
                                description: 'The group id',
                                type: 'string',
                            },
                        },
                    }, {
                        $ref: '#/components/schemas/RiskAssessmentSettings',
                    }, {
                        $ref: '#/components/schemas/LastTriggeredAt',
                    }, {
                        required: ['phishing_sim_freq', 'phishing_sim_on', 'group_id'],
                    }],
            },
            SecurityGroupSettings: {
                type: 'object',
                properties: {
                    phishing_filter_enforce: {
                        description: 'Enforce phishing filter',
                        type: 'boolean',
                    },
                    proxy_filter_enforce: {
                        description: 'Enforce proxy filter',
                        type: 'boolean',
                    },
                    xss_filter_enforce: {
                        description: 'Enforce xss filter',
                        type: 'boolean',
                    },
                    content_filter_enforce: {
                        description: 'Enforce content filter',
                        type: 'boolean',
                    },
                    password_manager_enforce: {
                        description: 'Enforce password manager',
                        type: 'boolean',
                    },
                    malicious_filter_enforce: {
                        description: 'Enforce malicious sites filter',
                        type: 'boolean',
                    },
                    browser_ext_avail: {
                        description: 'Allow browser extension for download by this group\'s users',
                        type: 'boolean',
                    },
                    outlook_addin_avail: {
                        description: 'Allow outlook extension for download by this group\'s users',
                        type: 'boolean',
                    },
                    acup_training_avail: {
                        description: 'Allow acup training',
                        type: 'boolean',
                    },
                    phishing_training_avail: {
                        description: 'Allow phishing training',
                        type: 'boolean',
                    },
                    identify_phishing_training_avail: {
                        description: 'Allow identify_phishing training',
                        type: 'boolean',
                    },
                    social_media_avail: {
                        description: 'Allow social_media training',
                        type: 'boolean',
                        deprecated: true,
                    },
                    ransomware_avail: {
                        description: 'Allow ransomware training',
                        type: 'boolean',
                        deprecated: true,
                    },
                    social_media_training_avail: {
                        description: 'Allow social_media training',
                        type: 'boolean',
                    },
                    ransomware_training_avail: {
                        description: 'Allow ransomware training',
                        type: 'boolean',
                    },
                    second_factor: {
                        description: 'Enforce seconds factor authentication',
                        type: 'string',
                    },
                    phishing_sim_on: {
                        description: 'Whether the simulation is enabled for this risk assessment group',
                        type: 'boolean',
                    },
                },
                required: [
                    'phishing_filter_enforce',
                    'proxy_filter_enforce',
                    'xss_filter_enforce',
                    'content_filter_enforce',
                    'password_manager_enforce',
                    'malicious_filter_enforce',
                    'browser_ext_avail',
                    'outlook_addin_avail',
                    'acup_training_avail',
                    'phishing_training_avail',
                    'identify_phishing_training_avail',
                    'second_factor',
                ],
            },
            User: {
                type: 'object',
                properties: {
                    user_id: {
                        $ref: '#/components/schemas/UserId',
                    },
                },
                required: ['user_id'],
            },
            Event: {
                type: 'object',
                properties: {
                    event_id: {
                        type: 'integer',
                    },
                    payload: {
                        type: 'object',
                    },
                    run_at: {
                        type: 'string',
                        format: 'date-time',
                    },
                    created_at: {
                        type: 'string',
                        format: 'date-time',
                    },
                    completed_at: {
                        type: 'string',
                        format: 'date-time',
                    },
                    success: {
                        type: 'integer',
                    },
                    response: {
                        type: 'object',
                    },
                },
                required: ['event_id', 'url', 'payload', 'run_at', 'created_at'],
            },
            UserSecuritySettings: {
                type: 'object',
                properties: {
                    phishing_filter: {
                        type: 'boolean',
                        description: 'Whether inbox protection is enabled',
                    },
                    proxy_filter: {
                        type: 'boolean',
                        description: 'Whether the proxy is enabled',
                    },
                    xss_filter: {
                        type: 'boolean',
                        description: 'Whether XSS filtering is enabled',
                    },
                    content_filter: {
                        type: 'boolean',
                        description: 'Whether the content filter is enabled',
                    },
                    password_manager: {
                        type: 'boolean',
                        description: 'Whether the password manager is enabled',
                    },
                    malicious_filter: {
                        type: 'boolean',
                        description: 'Whether the malicious web filter is enabled ',
                    },
                },
                required: [
                    'phishing_filter',
                    'proxy_filter',
                    'xss_filter',
                    'content_filter',
                    'password_manager',
                    'malicious_filter',
                ],
            },
            UserLastUsageTimes: {
                type: 'object',
                properties: {
                    dashboard: {
                        $ref: '#/components/schemas/DateTimeNullable',
                    },
                    extension: {
                        $ref: '#/components/schemas/DateTimeNullable',
                    },
                    outlook: {
                        $ref: '#/components/schemas/DateTimeNullable',
                    },
                    outlook_step_skipped: {
                        type: 'boolean',
                        description: 'Whether or not the Outlook add-in step is skipped',
                    },
                    emails_scanned: {
                        type: 'number',
                        description: 'the number of user\'s emails we\'ve scanned',
                    },
                    extension_used: {
                        type: 'boolean',
                        description: 'whether the user has used the extension (right now whether they have at least one stored password)',
                    },
                },
                required: [
                    'dashboard',
                    'extension',
                    'outlook',
                    'outlook_step_skipped',
                    'emails_scanned',
                    'extension_used',
                ],
            },
            FullUserSecurityStatus: {
                type: 'object',
                properties: {
                    user_id: {
                        $ref: '#/components/schemas/UserId',
                    },
                    training: {
                        $ref: '#/components/schemas/UserTrainingProgress',
                    },
                    settings: {
                        type: 'object',
                        allOf: [
                            {
                                $ref: '#/components/schemas/UserSecuritySettings',
                            },
                            {
                                type: 'object',
                                properties: {
                                    second_factor: {
                                        description: 'Enforce seconds factor authentication',
                                        type: 'boolean',
                                    },
                                },
                                required: [
                                    'second_factor',
                                ],
                            },
                        ],
                    },
                    usage: {
                        $ref: '#/components/schemas/UserLastUsageTimes',
                    },
                },
                required: ['user_id', 'training', 'settings', 'usage'],
            },
            UserTrainingProgress: {
                type: 'object',
                properties: {
                    phishing: {
                        $ref: '#/components/schemas/TrainingStatus',
                    },
                    social_media: {
                        $ref: '#/components/schemas/TrainingStatus',
                    },
                    acup: {
                        $ref: '#/components/schemas/TrainingStatus',
                    },
                    ransomware: {
                        $ref: '#/components/schemas/TrainingStatus',
                    },
                    identify_phishing: {
                        $ref: '#/components/schemas/TrainingStatus',
                    },
                },
                required: ['phishing', 'social_media', 'acup', 'ransomware', 'identify_phishing'],
            },
            TrainingProgress: {
                type: 'object',
                properties: {
                    progress: {
                        type: 'integer',
                        description: 'Current training progress',
                        minimum: 0,
                    },
                    quiz_score: {
                        type: 'integer',
                        description: 'Current training progress',
                        minimum: 0,
                        nullable: true,
                    },
                },
                required: ['progress'],
            },
            UserTourSettings: {
                type: 'object',
                properties: {
                    employees: {
                        type: 'boolean',
                        description: 'Whether employee dashboard tour is complete or not',
                        default: false,
                    },
                    admin: {
                        type: 'boolean',
                        description: 'Whether admin dashboard tour is complete or not',
                        default: false,
                    },
                    broker: {
                        type: 'boolean',
                        description: 'Whether admin dashboard tour is complete or not',
                        default: false,
                    },
                },
                required: ['employees', 'admin', 'broker'],
            },
            TrainingProgressUpdate: {
                allOf: [{
                        $ref: '#/components/schemas/TrainingProgress',
                    }, {
                        type: 'object',
                        properties: {
                            is_complete: {
                                type: 'boolean',
                            },
                        },
                        required: ['is_complete'],
                    }],
            },
            TrainingStatus: {
                type: 'object',
                allOf: [{
                        $ref: '#/components/schemas/CompletedAt',
                    }, {
                        $ref: '#/components/schemas/ModifiedAt',
                    }, {
                        $ref: '#/components/schemas/TrainingProgress',
                    }],
            },
            TrainingModule: {
                type: 'string',
                enum: ['phishing', 'identify_phishing', 'acup', 'social_media', 'ransomware'],
            },
            MessageEvent: {
                type: 'object',
                properties: {
                    type: {
                        type: 'string',
                    },
                    bounce_class: {
                        type: 'string',
                    },
                    campaign_id: {
                        type: 'string',
                    },
                    customer_id: {
                        type: 'string',
                    },
                    delv_method: {
                        type: 'string',
                    },
                    device_token: {
                        type: 'string',
                    },
                    error_code: {
                        type: 'string',
                    },
                    ip_address: {
                        type: 'string',
                    },
                    message_id: {
                        type: 'string',
                    },
                    msg_from: {
                        type: 'string',
                    },
                    msg_size: {
                        type: 'string',
                    },
                    num_retries: {
                        type: 'string',
                    },
                    rcpt_meta: {
                        type: 'object',
                    },
                    rcpt_tags: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    rcpt_to: {
                        type: 'string',
                    },
                    rcpt_type: {
                        type: 'string',
                    },
                    raw_reason: {
                        type: 'string',
                    },
                    reason: {
                        type: 'string',
                    },
                    routing_domain: {
                        type: 'string',
                    },
                    subject: {
                        type: 'string',
                    },
                    template_id: {
                        type: 'string',
                    },
                    template_version: {
                        type: 'string',
                    },
                    timestamp: {
                        type: 'string',
                    },
                    transmission_id: {
                        type: 'string',
                    },
                },
            },
            SparkpostEventResponse: {
                type: 'object',
                properties: {
                    msys: {
                        description: 'Sparkpost event descriptior',
                        type: 'object',
                        properties: {
                            track_event: {
                                $ref: '#/components/schemas/MessageEvent',
                            },
                        },
                    },
                },
                required: [
                    'msys',
                ],
            },
            SparkpostRequest: {
                type: 'array',
                description: 'Array of sparkpost events',
                items: {
                    $ref: '#/components/schemas/SparkpostEventResponse',
                },
            },
            LogFailedPhishingEmail: {
                type: 'object',
                properties: {
                    uuid: {
                        type: 'string',
                        description: 'Uuid (part of phishing landing page URL\'s query)',
                        default: false,
                    },
                },
                required: ['uuid'],
            },
            LogClickedPhishingEmail: {
                type: 'object',
                properties: {
                    uuid: {
                        type: 'string',
                        description: 'Uuid (part of phishing landing page URL\'s query)',
                        default: false,
                    },
                },
                required: ['uuid'],
            },
            DelegatedUserProfileCreate: {
                allOf: [{
                        $ref: '#/components/schemas/UserProfile',
                    }],
                required: [
                    'fname',
                    'lname',
                    'email',
                ],
            },
            UserProfileCreate: {
                allOf: [{
                        $ref: '#/components/schemas/DelegatedUserProfileCreate',
                    }, {
                        type: 'object',
                        properties: {
                            password: {
                                type: 'string',
                            },
                        },
                        required: [
                            'password',
                        ],
                    }],
            },
            UserProfileUpdate: {
                $ref: '#/components/schemas/UserProfile',
            },
            PendingEvent: {
                type: 'object',
                properties: {
                    event_id: {
                        description: 'The id of user the action should be performed on',
                        type: 'number',
                    },
                    url: {
                        description: 'The id of user the action should be performed on',
                        type: 'string',
                    },
                    payload: {
                        description: 'The id of user the action should be performed on',
                        type: 'object',
                    },
                },
                required: ['event_id', 'url', 'payload'],
            },
            UserProfileBasic: {
                type: 'object',
                properties: {
                    fname: {
                        description: 'User first name',
                        type: 'string',
                    },
                    lname: {
                        description: 'User last name',
                        type: 'string',
                    },
                    email: {
                        description: 'User email',
                        type: 'string',
                    },
                },
                required: ['fname', 'lname', 'email'],
            },
            UserProfile: {
                type: 'object',
                properties: {
                    fname: {
                        description: 'The id of user the action should be performed on',
                        type: 'string',
                    },
                    lname: {
                        description: 'The id of user the action should be performed on',
                        type: 'string',
                    },
                    email: {
                        description: 'The id of user the action should be performed on',
                        type: 'string',
                    },
                    title: {
                        description: 'The id of user the action should be performed on',
                        type: 'string',
                    },
                    phone: {
                        description: 'The id of user the action should be performed on',
                        type: 'string',
                    },
                    photo: {
                        description: 'The id of user the action should be performed on',
                        type: 'string',
                    },
                },
            },
            FullUserProfile: {
                allOf: [{
                        $ref: '#/components/schemas/UserProfile',
                    }, {
                        required: [
                            'fname',
                            'lname',
                            'email',
                            'title',
                            'phone',
                            'photo',
                        ],
                    }],
            },
            FullUser: {
                type: 'object',
                allOf: [{
                        $ref: '#/components/schemas/User',
                    }, {
                        $ref: '#/components/schemas/FullUserProfile',
                    }, {
                        $ref: '#/components/schemas/CreatedAt',
                    }, {
                        $ref: '#/components/schemas/ModifiedAt',
                    }, {
                        type: 'object',
                        properties: {
                            second_factor_enabled: {
                                description: 'Second factor authentication enabled',
                                type: 'boolean',
                            },
                        },
                        required: [
                            'second_factor_enabled',
                        ],
                    }],
            },
            IsMember: {
                type: 'object',
                properties: {
                    is_member: {
                        description: 'If the user is currently a member',
                        type: 'boolean',
                    },
                    encrypted_group_key: {
                        description: 'The group key for the password group, encrypted with the user\'s public key',
                        type: 'string',
                    },
                },
                required: ['is_member'],
            },
            Member: {
                allOf: [{
                        $ref: '#/components/schemas/User',
                    }, {
                        $ref: '#/components/schemas/FullUserProfile',
                    }, {
                        $ref: '#/components/schemas/CreatedAt',
                    }, {
                        $ref: '#/components/schemas/ModifiedAt',
                    }, {
                        $ref: '#/components/schemas/IsMember',
                    }],
            },
            ApplicationUse: {
                type: 'object',
                properties: {
                    app: {
                        description: 'What is used',
                        type: 'string',
                        enum: [
                            'extension',
                            'outlook',
                            'dashboard',
                        ],
                    },
                },
                required: [
                    'app',
                ],
            },
            UsagePreference: {
                type: 'object',
                properties: {
                    skip_outlook_step: {
                        type: 'boolean',
                    },
                },
                minProperties: 1,
                additionalProperties: false,
            },
            SecurityUserSettings: {
                type: 'object',
                properties: {
                    training: {
                        $ref: '#/components/schemas/UserTrainingProgress',
                    },
                    settings: {
                        type: 'object',
                        allOf: [
                            {
                                $ref: '#/components/schemas/UserSecuritySettings',
                            },
                            {
                                type: 'object',
                                properties: {
                                    second_factor: {
                                        description: 'Enforce seconds factor authentication',
                                        type: 'boolean',
                                    },
                                },
                                required: [
                                    'second_factor',
                                ],
                            },
                        ],
                    },
                    usage: {
                        $ref: '#/components/schemas/UserLastUsageTimes',
                    },
                    group: {
                        $ref: '#/components/schemas/SecurityGroupSettings',
                    },
                },
                required: ['training', 'settings', 'usage', 'group'],
            },
            NumberOfSecurityEvent: {
                type: 'object',
                properties: {
                    event_type: {
                        type: 'string',
                    },
                    count: {
                        type: 'integer',
                        minimum: 0,
                    },
                },
                required: [
                    'event_type',
                    'count',
                ],
            },
            NumberOfSecurityEvents: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/NumberOfSecurityEvent',
                },
            },
            DNSResponse: {
                type: 'object',
                properties: {
                    domain: {
                        type: 'string',
                        minLength: 1,
                    },
                    record: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                    },
                },
                required: [
                    'domain',
                    'record',
                ],
                additionalProperties: false,
            },
            DNSResponses: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/DNSResponse',
                },
                uniqueItems: true,
            },
            WebsiteScannerInternalResponse: {
                type: 'object',
                properties: {
                    results: {
                        $ref: '#/components/schemas/WebsiteScannerResult',
                    },
                    tests: {
                        $ref: '#/components/schemas/WebsiteScannerTests',
                    },
                },
                required: [
                    'results',
                    'tests',
                ],
            },
            WebsiteScannerInternalError: {
                type: 'object',
                properties: {
                    code: {
                        type: 'string',
                    },
                    message: {
                        type: 'string',
                    },
                },
                required: [
                    'code',
                    'message',
                ],
            },
            WebsiteScannerResponse: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerInternalResponse',
                    },
                    {
                        type: 'object',
                        properties: {
                            domain: {
                                type: 'string',
                            },
                        },
                        required: ['domain'],
                    },
                ],
            },
            WebsiteScannerError: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerInternalError',
                    },
                    {
                        type: 'object',
                        properties: {
                            domain: {
                                type: 'string',
                            },
                        },
                        required: ['domain'],
                    },
                ],
            },
            WebsiteScannerResult: {
                type: 'object',
                description: 'defined at: https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md#scan',
                properties: {
                    algorithm_version: {
                        type: 'number',
                    },
                    end_time: {
                        type: 'string',
                    },
                    grade: {
                        type: 'string',
                    },
                    hidden: {
                        type: 'boolean',
                    },
                    likelihood_indicator: {
                        type: 'string',
                    },
                    response_headers: {
                        type: 'object',
                        additionalProperties: {
                            type: 'string',
                        },
                    },
                    scan_id: {
                        type: 'number',
                    },
                    score: {
                        type: 'number',
                    },
                    start_time: {
                        type: 'string',
                    },
                    state: {
                        type: 'string',
                        enum: [
                            'ABORTED',
                            'FAILED',
                            'FINISHED',
                            'PENDING',
                            'STARTING',
                            'RUNNING',
                        ],
                    },
                    status_code: {
                        type: 'number',
                    },
                    tests_failed: {
                        type: 'number',
                    },
                    tests_passed: {
                        type: 'number',
                    },
                    tests_quantity: {
                        type: 'number',
                    },
                },
                required: [
                    'algorithm_version',
                    'end_time',
                    'grade',
                    'hidden',
                    'likelihood_indicator',
                    'response_headers',
                    'scan_id',
                    'score',
                    'start_time',
                    'state',
                    'status_code',
                    'tests_failed',
                    'tests_passed',
                    'tests_quantity',
                ],
                additionalProperties: false,
            },
            WebsiteScannerTests: {
                type: 'object',
                description: 'defined at: https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md#tests',
                properties: {
                    'content-security-policy': {
                        $ref: '#/components/schemas/WebsiteScannerCSPTest',
                    },
                    contribute: {
                        $ref: '#/components/schemas/WebsiteScannerContributeTest',
                    },
                    cookies: {
                        $ref: '#/components/schemas/WebsiteScannerCookiesTest',
                    },
                    'cross-origin-resource-sharing': {
                        $ref: '#/components/schemas/WebsiteScannerCORSTest',
                    },
                    'public-key-pinning': {
                        $ref: '#/components/schemas/WebsiteScannerPKPTest',
                    },
                    redirection: {
                        $ref: '#/components/schemas/WebsiteScannerRedirectionTest',
                    },
                    'referrer-policy': {
                        $ref: '#/components/schemas/WebsiteScannerRPTest',
                    },
                    'strict-transport-security': {
                        $ref: '#/components/schemas/WebsiteScannerSTSTest',
                    },
                    'subresource-integrity': {
                        $ref: '#/components/schemas/WebsiteScannerSITest',
                    },
                    'x-content-type-options': {
                        $ref: '#/components/schemas/WebsiteScannerXCTOTest',
                    },
                    'x-frame-options': {
                        $ref: '#/components/schemas/WebsiteScannerXFOTest',
                    },
                    'x-xss-protection': {
                        $ref: '#/components/schemas/WebsiteScannerXXPTest',
                    },
                },
                required: [
                    'content-security-policy',
                    'contribute',
                    'cookies',
                    'cross-origin-resource-sharing',
                    'public-key-pinning',
                    'redirection',
                    'referrer-policy',
                    'strict-transport-security',
                    'subresource-integrity',
                    'x-content-type-options',
                    'x-frame-options',
                    'x-xss-protection',
                ],
                additionalProperties: false,
            },
            WebsiteScannerBaseTest: {
                type: 'object',
                properties: {
                    expectation: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                    pass: {
                        type: 'boolean',
                    },
                    result: {
                        type: 'string',
                    },
                    score_description: {
                        type: 'string',
                    },
                    score_modifier: {
                        type: 'number',
                    },
                },
                required: [
                    'expectation',
                    'name',
                    'pass',
                    'result',
                    'score_description',
                    'score_modifier',
                ],
            },
            WebsiteScannerCSPTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerCSPOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['content-security-policy'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerContributeTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerContributeOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['contribute'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerCookiesTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerCookiesOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['cookies'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerCORSTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerCORSOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['cross-origin-resource-sharing'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerPKPTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerPKPOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['public-key-pinning'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerRedirectionTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerRedirectionOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['redirection'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerRPTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerRPOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['referrer-policy'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerSTSTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerSTSOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['strict-transport-security'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerSITest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerSIOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['subresource-integrity'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerXCTOTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerXCTOOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['x-content-type-options'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerXFOTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerXFOOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['x-frame-options'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerXXPTest: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/WebsiteScannerBaseTest',
                    },
                    {
                        type: 'object',
                        properties: {
                            output: {
                                $ref: '#/components/schemas/WebsiteScannerXXPOutput',
                            },
                            name: {
                                type: 'string',
                                enum: ['x-xss-protection'],
                            },
                        },
                        required: [
                            'output',
                            'name',
                        ],
                    },
                ],
                minProperties: 7,
                maxProperties: 7,
            },
            WebsiteScannerCSPOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                        nullable: true,
                        additionalProperties: {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                    },
                    http: {
                        type: 'boolean',
                    },
                    meta: {
                        type: 'boolean',
                    },
                    policy: {
                        type: 'object',
                        nullable: true,
                        properties: {
                            antiClickjacking: {
                                type: 'boolean',
                            },
                            defaultNone: {
                                type: 'boolean',
                            },
                            insecureBaseUri: {
                                type: 'boolean',
                            },
                            insecureFormAction: {
                                type: 'boolean',
                            },
                            insecureSchemeActive: {
                                type: 'boolean',
                            },
                            insecureSchemePassive: {
                                type: 'boolean',
                            },
                            strictDynamic: {
                                type: 'boolean',
                            },
                            unsafeEval: {
                                type: 'boolean',
                            },
                            unsafeInline: {
                                type: 'boolean',
                            },
                            unsafeInlineStyle: {
                                type: 'boolean',
                            },
                            unsafeObjects: {
                                type: 'boolean',
                            },
                        },
                        required: [
                            'antiClickjacking',
                            'defaultNone',
                            'insecureBaseUri',
                            'insecureFormAction',
                            'insecureSchemeActive',
                            'insecureSchemePassive',
                            'strictDynamic',
                            'unsafeEval',
                            'unsafeInline',
                            'unsafeInlineStyle',
                            'unsafeObjects',
                        ],
                        additionalProperties: false,
                    },
                },
                required: [
                    'data',
                    'http',
                    'meta',
                    'policy',
                ],
                additionalProperties: false,
            },
            WebsiteScannerContributeOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                        nullable: true,
                        properties: {
                            name: {
                                $ref: '#/components/schemas/WebsiteScannerAnyValue',
                            },
                            description: {
                                $ref: '#/components/schemas/WebsiteScannerAnyValue',
                            },
                            participate: {
                                $ref: '#/components/schemas/WebsiteScannerAnyValue',
                            },
                            bugs: {
                                $ref: '#/components/schemas/WebsiteScannerAnyValue',
                            },
                            urls: {
                                $ref: '#/components/schemas/WebsiteScannerAnyValue',
                            },
                        },
                        required: [
                            'name',
                            'description',
                            'participate',
                            'bugs',
                            'urls',
                        ],
                        additionalProperties: {
                            $ref: '#/components/schemas/WebsiteScannerAnyValue',
                        },
                    },
                },
                required: [
                    'data',
                ],
                additionalProperties: false,
            },
            WebsiteScannerCookiesOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                        nullable: true,
                        additionalProperties: {
                            type: 'object',
                            properties: {
                                domain: {
                                    type: 'string',
                                    nullable: true,
                                },
                                expires: {
                                    type: 'number',
                                    nullable: true,
                                },
                                httponly: {
                                    type: 'boolean',
                                    nullable: true,
                                },
                                'max-age': {
                                    type: 'number',
                                    nullable: true,
                                },
                                path: {
                                    type: 'string',
                                    nullable: true,
                                },
                                port: {
                                    type: 'number',
                                    nullable: true,
                                },
                                samesite: {
                                    type: 'boolean',
                                    nullable: true,
                                },
                                secure: {
                                    type: 'boolean',
                                    nullable: true,
                                },
                            },
                            required: [
                                'domain',
                                'expires',
                                'httponly',
                                'max-age',
                                'path',
                                'port',
                                'samesite',
                                'secure',
                            ],
                            additionalProperties: false,
                        },
                    },
                    sameSite: {
                        type: 'boolean',
                        nullable: true,
                    },
                },
                required: [
                    'data',
                    'sameSite',
                ],
                additionalProperties: false,
            },
            WebsiteScannerCORSOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                        nullable: true,
                        properties: {
                            acao: {
                                type: 'string',
                                nullable: true,
                            },
                            clientaccesspolicy: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                                nullable: true,
                            },
                            crossdomain: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                                nullable: true,
                            },
                        },
                        required: [
                            'acao',
                            'clientaccesspolicy',
                            'crossdomain',
                        ],
                        additionalProperties: false,
                    },
                },
                required: ['data'],
                additionalProperties: false,
            },
            WebsiteScannerPKPOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'string',
                        nullable: true,
                    },
                    includeSubDomains: {
                        type: 'boolean',
                    },
                    'max-age': {
                        type: 'number',
                        nullable: true,
                    },
                    numPins: {
                        type: 'number',
                        nullable: true,
                    },
                    preloaded: {
                        type: 'boolean',
                    },
                },
                required: [
                    'data',
                    'includeSubDomains',
                    'max-age',
                    'numPins',
                    'preloaded',
                ],
                additionalProperties: false,
            },
            WebsiteScannerRedirectionOutput: {
                type: 'object',
                properties: {
                    destination: {
                        type: 'string',
                        nullable: true,
                    },
                    redirects: {
                        type: 'boolean',
                    },
                    route: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    status_code: {
                        type: 'number',
                        nullable: true,
                    },
                },
                required: [
                    'destination',
                    'redirects',
                    'route',
                    'status_code',
                ],
                additionalProperties: false,
            },
            WebsiteScannerRPOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'string',
                        nullable: true,
                    },
                    http: {
                        type: 'boolean',
                    },
                    meta: {
                        type: 'boolean',
                    },
                },
                required: [
                    'data',
                    'http',
                    'meta',
                ],
                additionalProperties: false,
            },
            WebsiteScannerSTSOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'string',
                        nullable: true,
                    },
                    includeSubDomains: {
                        type: 'boolean',
                    },
                    'max-age': {
                        type: 'number',
                        nullable: true,
                    },
                    preload: {
                        type: 'boolean',
                    },
                    preloaded: {
                        type: 'boolean',
                    },
                },
                required: [
                    'data',
                    'includeSubDomains',
                    'max-age',
                    'preload',
                    'preloaded',
                ],
                additionalProperties: false,
            },
            WebsiteScannerSIOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                        additionalProperties: {
                            type: 'object',
                            properties: {
                                crossorigin: {
                                    type: 'string',
                                    nullable: true,
                                },
                                integrity: {
                                    type: 'string',
                                    nullable: true,
                                },
                            },
                            required: [
                                'crossorigin',
                                'integrity',
                            ],
                            additionalProperties: false,
                        },
                    },
                },
                required: ['data'],
                additionalProperties: false,
            },
            WebsiteScannerXCTOOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'string',
                        nullable: true,
                    },
                },
                required: ['data'],
                additionalProperties: false,
            },
            WebsiteScannerXFOOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'string',
                        nullable: true,
                    },
                },
                required: ['data'],
                additionalProperties: false,
            },
            WebsiteScannerXXPOutput: {
                type: 'object',
                properties: {
                    data: {
                        type: 'string',
                        nullable: true,
                    },
                },
                required: ['data'],
                additionalProperties: false,
            },
            WebsiteScannerAnyValue: {
                description: 'This is how to make openapi-types understand \'any\'.',
                type: 'object',
                nullable: true,
                anyOf: [
                    {
                        type: 'boolean',
                    },
                    {
                        type: 'integer',
                    },
                    {
                        type: 'null',
                    },
                    {
                        type: 'number',
                    },
                    {
                        type: 'object',
                    },
                    {
                        type: 'string',
                    },
                    {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/WebsiteScannerAnyValue',
                        },
                    },
                ],
            },
            ActiveRecords: {
                description: 'Active records',
                type: 'object',
                properties: {
                    DMARC: {
                        type: 'boolean',
                    },
                    DKIM: {
                        type: 'boolean',
                    },
                    SPF: {
                        type: 'boolean',
                    },
                },
                required: [
                    'DMARC',
                    'DKIM',
                    'SPF',
                ],
            },
            ErrorsRecords: {
                description: 'Errors of records',
                type: 'object',
                properties: {
                    DMARC: {
                        $ref: '#/components/schemas/strings',
                    },
                    DKIM: {
                        $ref: '#/components/schemas/strings',
                    },
                    SPF: {
                        $ref: '#/components/schemas/strings',
                    },
                },
                required: [
                    'DMARC',
                    'DKIM',
                    'SPF',
                ],
            },
            HostScannerResponse: {
                description: 'Response from host vulnerability scanner',
                type: 'object',
                additionalProperties: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            cvss_base: {
                                type: 'string',
                            },
                            name: {
                                type: 'string',
                            },
                            cve: {
                                type: 'string',
                            },
                            family: {
                                type: 'string',
                            },
                        },
                        required: ['cvss_base', 'name', 'cve', 'family'],
                    },
                },
            },
            HostScannerError: {
                type: 'object',
                properties: {
                    domain: {
                        type: 'string',
                    },
                    code: {
                        type: 'string',
                    },
                },
                required: ['domain', 'code'],
            },
            ArgoQuote: {
                type: 'object',
                properties: {
                    agg_claims_made_deductible: {
                        type: 'number',
                    },
                    agg_claims_made_limit: {
                        type: 'number',
                    },
                    aggregate_first_party_deductible: {
                        type: 'number',
                    },
                    aggregate_first_party_limit: {
                        type: 'number',
                    },
                    bricking_deductible: {
                        type: 'number',
                    },
                    bricking_limit: {
                        type: 'number',
                    },
                    business_interrup_deductible: {
                        type: 'number',
                    },
                    business_interrup_limit: {
                        type: 'number',
                    },
                    business_interrup_wait: {
                        type: 'number',
                    },
                    claims_made_liability_deductible: {
                        type: 'number',
                    },
                    claims_made_liability_limit: {
                        type: 'number',
                    },
                    crisis_management_deductible: {
                        type: 'number',
                    },
                    crisis_management_limit: {
                        type: 'number',
                    },
                    cyber_event_deductible: {
                        type: 'number',
                    },
                    cyber_event_limit: {
                        type: 'number',
                    },
                    data_recovery_deductible: {
                        type: 'number',
                    },
                    data_recovery_limit: {
                        type: 'number',
                    },
                    dependent_business_interrup_deductible: {
                        type: 'number',
                    },
                    dependent_business_interrup_limit: {
                        type: 'number',
                    },
                    extortion_deductible: {
                        type: 'number',
                    },
                    extortion_limit: {
                        type: 'number',
                    },
                    first_party_deductible: {
                        type: 'number',
                    },
                    first_party_limit: {
                        type: 'number',
                    },
                    forensic_and_legal_deductible: {
                        type: 'number',
                    },
                    forensic_and_legal_limit: {
                        type: 'number',
                    },
                    fraud_response_deductible: {
                        type: 'number',
                    },
                    fraud_response_limit: {
                        type: 'number',
                    },
                    industry: {
                        type: 'string',
                    },
                    invoice_manipulation_deductible: {
                        type: 'number',
                    },
                    invoice_manipulation_limit: {
                        type: 'number',
                    },
                    media_deductible: {
                        type: 'number',
                    },
                    media_limit: {
                        type: 'number',
                    },
                    partner_id: {
                        type: 'string',
                    },
                    payment_card_system_deductible: {
                        type: 'number',
                    },
                    payment_card_system_limit: {
                        type: 'number',
                    },
                    pcidss_deductible: {
                        type: 'number',
                    },
                    pcidss_limit: {
                        type: 'number',
                    },
                    policy_deductible: {
                        type: 'number',
                    },
                    policy_end: {
                        type: 'string',
                    },
                    policy_limit: {
                        type: 'number',
                    },
                    policy_start: {
                        type: 'string',
                    },
                    policy_type: {
                        type: 'string',
                    },
                    privacy_liability_deductible: {
                        type: 'number',
                    },
                    privacy_liability_limit: {
                        type: 'number',
                    },
                    public_relations_deductible: {
                        type: 'number',
                    },
                    public_relations_limit: {
                        type: 'number',
                    },
                    quote_id: {
                        type: 'string',
                    },
                    ransomware_deductible: {
                        type: 'number',
                    },
                    ransomware_limit: {
                        type: 'number',
                    },
                    revenue: {
                        type: 'number',
                    },
                    risk_level: {
                        type: 'number',
                    },
                    social_engineering_deductible: {
                        type: 'number',
                    },
                    social_engineering_limit: {
                        type: 'number',
                    },
                    telecomm_deductible: {
                        type: 'number',
                    },
                    telecomm_limit: {
                        type: 'number',
                    },
                    total_premium: {
                        type: 'number',
                    },
                },
                required: [
                    'agg_claims_made_deductible',
                    'agg_claims_made_limit',
                    'aggregate_first_party_deductible',
                    'aggregate_first_party_limit',
                    'bricking_deductible',
                    'bricking_limit',
                    'business_interrup_deductible',
                    'business_interrup_limit',
                    'business_interrup_wait',
                    'claims_made_liability_deductible',
                    'claims_made_liability_limit',
                    'crisis_management_deductible',
                    'crisis_management_limit',
                    'cyber_event_deductible',
                    'cyber_event_limit',
                    'data_recovery_deductible',
                    'data_recovery_limit',
                    'dependent_business_interrup_deductible',
                    'dependent_business_interrup_limit',
                    'extortion_deductible',
                    'extortion_limit',
                    'first_party_deductible',
                    'first_party_limit',
                    'forensic_and_legal_deductible',
                    'forensic_and_legal_limit',
                    'fraud_response_deductible',
                    'fraud_response_limit',
                    'industry',
                    'invoice_manipulation_deductible',
                    'invoice_manipulation_limit',
                    'media_deductible',
                    'media_limit',
                    'partner_id',
                    'payment_card_system_deductible',
                    'payment_card_system_limit',
                    'pcidss_deductible',
                    'pcidss_limit',
                    'policy_deductible',
                    'policy_end',
                    'policy_limit',
                    'policy_start',
                    'policy_type',
                    'privacy_liability_deductible',
                    'privacy_liability_limit',
                    'public_relations_deductible',
                    'public_relations_limit',
                    'quote_id',
                    'ransomware_deductible',
                    'ransomware_limit',
                    'revenue',
                    'risk_level',
                    'social_engineering_deductible',
                    'social_engineering_limit',
                    'telecomm_deductible',
                    'telecomm_limit',
                    'total_premium',
                ],
            },
            ArgoPolicy: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/ArgoQuote',
                    },
                    {
                        type: 'object',
                        properties: {
                            policy_id: {
                                type: 'string',
                            },
                            nj_sla_number: {
                                type: 'string',
                            },
                        },
                    },
                ],
                required: [
                    'policy_id',
                ],
            },
            Person: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                    },
                    fname: {
                        type: 'string',
                    },
                    lname: {
                        type: 'string',
                    },
                    phone: {
                        type: 'string',
                    },
                },
                required: [
                    'email',
                    'fname',
                    'lname',
                    'phone',
                ],
            },
            Company: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/Address',
                    },
                    {
                        type: 'object',
                        properties: {
                            group_name: {
                                type: 'string',
                            },
                        },
                        required: [
                            'group_name',
                        ],
                    },
                ],
            },
            CompanyWithContact: {
                type: 'object',
                allOf: [
                    {
                        $ref: '#/components/schemas/Company',
                    },
                    {
                        $ref: '#/components/schemas/Person',
                    },
                ],
            },
            Partner: {
                type: 'object',
                additionalProperties: true,
                allOf: [{
                        type: 'object',
                        properties: {
                            commission_rate: {
                                type: 'number',
                            },
                            group_id: {
                                type: 'string',
                            },
                            group_type: {
                                type: 'string',
                            },
                        },
                        required: [
                            'commission_rate',
                            'group_type',
                        ],
                    },
                    {
                        $ref: '#/components/schemas/Company',
                    }],
            },
            PdfType: {
                type: 'string',
                enum: ['cyber-risk', 'sales-report'],
            },
            PdfArgs: {
                type: 'object',
                oneOf: [
                    {
                        $ref: '#/components/schemas/SalesReportArgs',
                    },
                    {
                        $ref: '#/components/schemas/CyberRiskArgs',
                    },
                ],
                discriminator: {
                    propertyName: 'pdfType',
                    mapping: {
                        'sales-report': '#/components/schemas/SalesReportArgs',
                        'cyber-risk': '#/components/schemas/CyberRiskArgs',
                    },
                },
            },
            SalesReportArgs: {
                type: 'object',
                properties: {
                    companyName: {
                        type: 'string',
                    },
                    email: {
                        type: 'string',
                    },
                    emailDomain: {
                        type: 'string',
                    },
                    domain: {
                        type: 'string',
                    },
                    industry: {
                        type: 'string',
                    },
                    pdfType: {
                        type: 'string',
                        enum: ['sales-report'],
                    },
                },
                required: [
                    'domain',
                    'industry',
                    'pdfType',
                ],
            },
            CyberRiskArgs: {
                type: 'object',
                properties: {
                    pdfType: {
                        type: 'string',
                        enum: ['cyber-risk'],
                    },
                },
                required: [
                    'pdfType',
                ],
            },
            TemplateActivationUpdate: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    template_id: {
                        type: 'string',
                    },
                    is_disabled: {
                        type: 'boolean',
                    },
                },
                required: [
                    'template_id',
                    'is_disabled',
                ],
            },
        },
    },
    paths: {},
};
exports.apiDoc = apiDoc;
//# sourceMappingURL=api-doc.js.map