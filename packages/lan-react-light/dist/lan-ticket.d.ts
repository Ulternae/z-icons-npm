import React from 'react';

export interface LanTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicket(props: LanTicketProps): React.ReactElement;
export default LanTicket;
