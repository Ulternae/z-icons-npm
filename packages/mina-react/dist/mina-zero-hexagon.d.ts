import React from 'react';

export interface MinaZeroHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroHexagon(props: MinaZeroHexagonProps): React.ReactElement;
export default MinaZeroHexagon;
