import React from 'react';

export interface MinaCartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCart(props: MinaCartProps): React.ReactElement;
export default MinaCart;
