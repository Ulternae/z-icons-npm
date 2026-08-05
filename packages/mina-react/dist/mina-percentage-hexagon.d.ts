import React from 'react';

export interface MinaPercentageHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageHexagon(props: MinaPercentageHexagonProps): React.ReactElement;
export default MinaPercentageHexagon;
