import React from 'react';

export interface MinaDotsVerticalHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalHexagon(props: MinaDotsVerticalHexagonProps): React.ReactElement;
export default MinaDotsVerticalHexagon;
