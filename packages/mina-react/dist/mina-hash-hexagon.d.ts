import React from 'react';

export interface MinaHashHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashHexagon(props: MinaHashHexagonProps): React.ReactElement;
export default MinaHashHexagon;
