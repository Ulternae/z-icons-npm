import React from 'react';

export interface MinaForwardHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardHexagon(props: MinaForwardHexagonProps): React.ReactElement;
export default MinaForwardHexagon;
