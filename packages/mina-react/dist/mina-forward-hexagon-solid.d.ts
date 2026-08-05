import React from 'react';

export interface MinaForwardHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardHexagonSolid(props: MinaForwardHexagonSolidProps): React.ReactElement;
export default MinaForwardHexagonSolid;
