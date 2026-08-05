import React from 'react';

export interface MinaSevenHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenHexagon(props: MinaSevenHexagonProps): React.ReactElement;
export default MinaSevenHexagon;
