import React from 'react';

export interface LanTicketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketThin: React.FC<LanTicketThinProps>;
export default LanTicketThin;
