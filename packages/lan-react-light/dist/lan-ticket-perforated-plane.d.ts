import React from 'react';

export interface LanTicketPerforatedPlaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketPerforatedPlane(props: LanTicketPerforatedPlaneProps): React.ReactElement;
export default LanTicketPerforatedPlane;
