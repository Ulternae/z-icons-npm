import React from 'react';

export interface LanTicketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketSolid(props: LanTicketSolidProps): React.ReactElement;
export default LanTicketSolid;
