import React from 'react';

export interface LanTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicket: React.FC<LanTicketProps>;
export default LanTicket;
