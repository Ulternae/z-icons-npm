import React from 'react';

export interface NeoTicketRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTicketRegularDuo: React.FC<NeoTicketRegularDuoProps>;
export default NeoTicketRegularDuo;
