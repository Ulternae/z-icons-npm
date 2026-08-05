import React from 'react';

export interface MinaSearchMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchMinus(props: MinaSearchMinusProps): React.ReactElement;
export default MinaSearchMinus;
