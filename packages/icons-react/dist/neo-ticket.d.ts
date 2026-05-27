import React from 'react';

export interface NeoTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTicket: React.FC<NeoTicketProps>;
export default NeoTicket;
