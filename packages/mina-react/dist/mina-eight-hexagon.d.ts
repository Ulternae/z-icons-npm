import React from 'react';

export interface MinaEightHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightHexagon(props: MinaEightHexagonProps): React.ReactElement;
export default MinaEightHexagon;
