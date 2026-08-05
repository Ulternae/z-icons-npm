import React from 'react';

export interface MinaHashHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashHexagonSolid(props: MinaHashHexagonSolidProps): React.ReactElement;
export default MinaHashHexagonSolid;
