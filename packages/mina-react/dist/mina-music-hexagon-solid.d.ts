import React from 'react';

export interface MinaMusicHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicHexagonSolid(props: MinaMusicHexagonSolidProps): React.ReactElement;
export default MinaMusicHexagonSolid;
