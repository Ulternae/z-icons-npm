import React from 'react';

export interface MinaThreeHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeHexagon(props: MinaThreeHexagonProps): React.ReactElement;
export default MinaThreeHexagon;
