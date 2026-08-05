import React from 'react';

export interface MinaCartMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartMinus(props: MinaCartMinusProps): React.ReactElement;
export default MinaCartMinus;
