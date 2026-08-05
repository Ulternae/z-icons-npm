import React from 'react';

export interface MinaLocationMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationMinus(props: MinaLocationMinusProps): React.ReactElement;
export default MinaLocationMinus;
