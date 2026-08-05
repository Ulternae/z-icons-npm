import React from 'react';

export interface NeoTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTicket(props: NeoTicketProps): React.ReactElement;
export default NeoTicket;
