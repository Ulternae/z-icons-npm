import React from 'react';

export interface MinaTicketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTicketSolid(props: MinaTicketSolidProps): React.ReactElement;
export default MinaTicketSolid;
