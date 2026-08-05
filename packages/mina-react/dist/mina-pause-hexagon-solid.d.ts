import React from 'react';

export interface MinaPauseHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseHexagonSolid(props: MinaPauseHexagonSolidProps): React.ReactElement;
export default MinaPauseHexagonSolid;
