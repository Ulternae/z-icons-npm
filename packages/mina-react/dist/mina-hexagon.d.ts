import React from 'react';

export interface MinaHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHexagon(props: MinaHexagonProps): React.ReactElement;
export default MinaHexagon;
