import React from 'react';

export interface NeoTicketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTicketSolid(props: NeoTicketSolidProps): React.ReactElement;
export default NeoTicketSolid;
