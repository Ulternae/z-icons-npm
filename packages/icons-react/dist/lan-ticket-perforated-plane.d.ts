import React from 'react';

export interface LanTicketPerforatedPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketPerforatedPlane: React.FC<LanTicketPerforatedPlaneProps>;
export default LanTicketPerforatedPlane;
