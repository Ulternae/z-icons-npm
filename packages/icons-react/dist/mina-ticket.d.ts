import React from 'react';

export interface MinaTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTicket: React.FC<MinaTicketProps>;
export default MinaTicket;
