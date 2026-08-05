import React from 'react';

export interface MinaOneHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneHexagon(props: MinaOneHexagonProps): React.ReactElement;
export default MinaOneHexagon;
