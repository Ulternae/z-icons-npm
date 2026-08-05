import React from 'react';

export interface MinaSixHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixHexagon(props: MinaSixHexagonProps): React.ReactElement;
export default MinaSixHexagon;
