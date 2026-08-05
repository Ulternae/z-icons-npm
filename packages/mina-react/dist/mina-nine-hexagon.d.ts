import React from 'react';

export interface MinaNineHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineHexagon(props: MinaNineHexagonProps): React.ReactElement;
export default MinaNineHexagon;
