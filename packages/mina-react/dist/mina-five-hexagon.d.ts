import React from 'react';

export interface MinaFiveHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveHexagon(props: MinaFiveHexagonProps): React.ReactElement;
export default MinaFiveHexagon;
