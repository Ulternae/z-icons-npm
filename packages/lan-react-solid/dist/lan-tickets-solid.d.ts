import React from 'react';

export interface LanTicketsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsSolid(props: LanTicketsSolidProps): React.ReactElement;
export default LanTicketsSolid;
