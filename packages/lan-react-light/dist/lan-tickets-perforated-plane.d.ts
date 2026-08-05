import React from 'react';

export interface LanTicketsPerforatedPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsPerforatedPlane(props: LanTicketsPerforatedPlaneProps): React.ReactElement;
export default LanTicketsPerforatedPlane;
