import React from 'react';

export interface MinaCodeHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeHexagon(props: MinaCodeHexagonProps): React.ReactElement;
export default MinaCodeHexagon;
