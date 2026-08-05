import React from 'react';

export interface MinaMusicHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicHexagon(props: MinaMusicHexagonProps): React.ReactElement;
export default MinaMusicHexagon;
