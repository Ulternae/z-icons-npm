import React from 'react';

export interface MinaAsteriskHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskHexagon(props: MinaAsteriskHexagonProps): React.ReactElement;
export default MinaAsteriskHexagon;
