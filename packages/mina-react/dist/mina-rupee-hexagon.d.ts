import React from 'react';

export interface MinaRupeeHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeHexagon(props: MinaRupeeHexagonProps): React.ReactElement;
export default MinaRupeeHexagon;
