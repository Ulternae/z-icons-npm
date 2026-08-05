import React from 'react';

export interface MinaXHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXHexagon(props: MinaXHexagonProps): React.ReactElement;
export default MinaXHexagon;
