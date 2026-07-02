import React from 'react';

export interface CoreTicketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTicket(props: CoreTicketProps): React.ReactElement;
export default CoreTicket;
