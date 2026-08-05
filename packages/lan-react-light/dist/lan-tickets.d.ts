import React from 'react';

export interface LanTicketsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTickets(props: LanTicketsProps): React.ReactElement;
export default LanTickets;
