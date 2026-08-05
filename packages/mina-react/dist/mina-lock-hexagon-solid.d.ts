import React from 'react';

export interface MinaLockHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockHexagonSolid(props: MinaLockHexagonSolidProps): React.ReactElement;
export default MinaLockHexagonSolid;
