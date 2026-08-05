import React from 'react';

export interface MinaEuroHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroHexagon(props: MinaEuroHexagonProps): React.ReactElement;
export default MinaEuroHexagon;
