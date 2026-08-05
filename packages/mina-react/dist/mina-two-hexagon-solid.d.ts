import React from 'react';

export interface MinaTwoHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoHexagonSolid(props: MinaTwoHexagonSolidProps): React.ReactElement;
export default MinaTwoHexagonSolid;
