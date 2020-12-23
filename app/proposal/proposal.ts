export class Proposal {
    constructor(
        public id?: number,
        public customer?: string,
        public portfolio_url: string = 'https://',
        public tools?: string,
        public estimated_hours?: string,
        public hourly_rate?: number,
        public weeks_to_complete?: number,
        public client_email?: string,
    ) {}
}

// 15, 'ABC Company', 'https://portfolio.jordanhudgens.com', 'Ruby on Rails', '150', 120, 15, 'jordan@devcamp.com'