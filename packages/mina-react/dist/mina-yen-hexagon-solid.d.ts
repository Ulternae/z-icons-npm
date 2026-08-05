import React from 'react';

export interface MinaYenHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenHexagonSolid(props: MinaYenHexagonSolidProps): React.ReactElement;
export default MinaYenHexagonSolid;
