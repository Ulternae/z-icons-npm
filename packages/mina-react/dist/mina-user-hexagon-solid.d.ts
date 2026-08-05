import React from 'react';

export interface MinaUserHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserHexagonSolid(props: MinaUserHexagonSolidProps): React.ReactElement;
export default MinaUserHexagonSolid;
