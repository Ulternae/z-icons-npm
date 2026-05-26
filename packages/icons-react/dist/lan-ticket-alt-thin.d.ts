import React from 'react';

export interface LanTicketAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketAltThin: React.FC<LanTicketAltThinProps>;
export default LanTicketAltThin;
