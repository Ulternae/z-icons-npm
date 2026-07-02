import React from 'react';

export interface CoreTicketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTicketSolid(props: CoreTicketSolidProps): React.ReactElement;
export default CoreTicketSolid;
