import React from 'react';

export interface CoreTicketRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTicketRegularDuo(props: CoreTicketRegularDuoProps): React.ReactElement;
export default CoreTicketRegularDuo;
