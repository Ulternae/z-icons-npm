import React from 'react';

export interface MinaDotsHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsHexagon(props: MinaDotsHexagonProps): React.ReactElement;
export default MinaDotsHexagon;
