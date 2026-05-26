import React from 'react';

export interface LanTicketsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsSolid: React.FC<LanTicketsSolidProps>;
export default LanTicketsSolid;
