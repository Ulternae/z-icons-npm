import React from 'react';

export interface NeoTicketRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTicketRegularDuo(props: NeoTicketRegularDuoProps): React.ReactElement;
export default NeoTicketRegularDuo;
