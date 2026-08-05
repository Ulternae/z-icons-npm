import React from 'react';

export interface MinaEuroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuro(props: MinaEuroProps): React.ReactElement;
export default MinaEuro;
