import React from 'react';

export interface MinaDangerHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerHexagonSolid(props: MinaDangerHexagonSolidProps): React.ReactElement;
export default MinaDangerHexagonSolid;
