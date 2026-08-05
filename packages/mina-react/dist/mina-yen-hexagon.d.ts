import React from 'react';

export interface MinaYenHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenHexagon(props: MinaYenHexagonProps): React.ReactElement;
export default MinaYenHexagon;
