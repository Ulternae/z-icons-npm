import React from 'react';

export interface MinaTicketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTicketSolid: React.FC<MinaTicketSolidProps>;
export default MinaTicketSolid;
