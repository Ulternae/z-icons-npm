import React from 'react';

export interface MinaBellMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellMinus(props: MinaBellMinusProps): React.ReactElement;
export default MinaBellMinus;
