import React from 'react';

export interface MinaDollarHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarHexagon(props: MinaDollarHexagonProps): React.ReactElement;
export default MinaDollarHexagon;
