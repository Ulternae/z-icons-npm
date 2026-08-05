import React from 'react';

export interface MinaPercentageHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageHexagonSolid(props: MinaPercentageHexagonSolidProps): React.ReactElement;
export default MinaPercentageHexagonSolid;
