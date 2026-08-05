import React from 'react';

export interface MinaSevenHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenHexagonSolid(props: MinaSevenHexagonSolidProps): React.ReactElement;
export default MinaSevenHexagonSolid;
