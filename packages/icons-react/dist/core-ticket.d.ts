import React from 'react';

export interface CoreTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTicket: React.FC<CoreTicketProps>;
export default CoreTicket;
