import React from 'react';

export interface MinaThreeHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeHexagonSolid(props: MinaThreeHexagonSolidProps): React.ReactElement;
export default MinaThreeHexagonSolid;
