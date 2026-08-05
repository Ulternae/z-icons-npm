import React from 'react';

export interface MinaFourHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourHexagon(props: MinaFourHexagonProps): React.ReactElement;
export default MinaFourHexagon;
