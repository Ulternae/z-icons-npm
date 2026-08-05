import React from 'react';

export interface MinaHeartHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartHexagon(props: MinaHeartHexagonProps): React.ReactElement;
export default MinaHeartHexagon;
