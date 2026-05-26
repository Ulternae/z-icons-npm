import React from 'react';

export interface LanTicketAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketAlt: React.FC<LanTicketAltProps>;
export default LanTicketAlt;
