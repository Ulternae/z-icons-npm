import React from 'react';

export interface MinaHeartHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartHexagonSolid(props: MinaHeartHexagonSolidProps): React.ReactElement;
export default MinaHeartHexagonSolid;
