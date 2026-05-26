import React from 'react';

export interface LanTicketsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTickets: React.FC<LanTicketsProps>;
export default LanTickets;
