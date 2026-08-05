import React from 'react';

export interface MinaCodeHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeHexagonSolid(props: MinaCodeHexagonSolidProps): React.ReactElement;
export default MinaCodeHexagonSolid;
