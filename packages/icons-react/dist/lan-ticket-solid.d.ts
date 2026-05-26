import React from 'react';

export interface LanTicketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketSolid: React.FC<LanTicketSolidProps>;
export default LanTicketSolid;
