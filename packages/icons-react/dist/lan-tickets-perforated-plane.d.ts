import React from 'react';

export interface LanTicketsPerforatedPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTicketsPerforatedPlane: React.FC<LanTicketsPerforatedPlaneProps>;
export default LanTicketsPerforatedPlane;
