import React from 'react';

export interface MinaTwoHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoHexagon(props: MinaTwoHexagonProps): React.ReactElement;
export default MinaTwoHexagon;
