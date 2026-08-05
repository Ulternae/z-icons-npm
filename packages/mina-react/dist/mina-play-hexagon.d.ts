import React from 'react';

export interface MinaPlayHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayHexagon(props: MinaPlayHexagonProps): React.ReactElement;
export default MinaPlayHexagon;
