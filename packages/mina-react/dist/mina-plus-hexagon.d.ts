import React from 'react';

export interface MinaPlusHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusHexagon(props: MinaPlusHexagonProps): React.ReactElement;
export default MinaPlusHexagon;
