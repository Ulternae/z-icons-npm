import React from 'react';

export interface CoreTicketRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTicketRegularDuo: React.FC<CoreTicketRegularDuoProps>;
export default CoreTicketRegularDuo;
