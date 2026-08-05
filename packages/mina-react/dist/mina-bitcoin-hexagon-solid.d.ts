import React from 'react';

export interface MinaBitcoinHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinHexagonSolid(props: MinaBitcoinHexagonSolidProps): React.ReactElement;
export default MinaBitcoinHexagonSolid;
