import React from 'react';

export interface MinaHeartMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartMinus(props: MinaHeartMinusProps): React.ReactElement;
export default MinaHeartMinus;
