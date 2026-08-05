import React from 'react';

export interface MinaMinusHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusHexagon(props: MinaMinusHexagonProps): React.ReactElement;
export default MinaMinusHexagon;
