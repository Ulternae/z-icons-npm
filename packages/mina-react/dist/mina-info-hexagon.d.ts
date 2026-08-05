import React from 'react';

export interface MinaInfoHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoHexagon(props: MinaInfoHexagonProps): React.ReactElement;
export default MinaInfoHexagon;
