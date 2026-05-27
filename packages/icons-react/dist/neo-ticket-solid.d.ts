import React from 'react';

export interface NeoTicketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTicketSolid: React.FC<NeoTicketSolidProps>;
export default NeoTicketSolid;
