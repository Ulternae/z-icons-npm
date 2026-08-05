import React from 'react';

export interface MinaTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTicket(props: MinaTicketProps): React.ReactElement;
export default MinaTicket;
