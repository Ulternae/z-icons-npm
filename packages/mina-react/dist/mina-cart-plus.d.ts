import React from 'react';

export interface MinaCartPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartPlus(props: MinaCartPlusProps): React.ReactElement;
export default MinaCartPlus;
