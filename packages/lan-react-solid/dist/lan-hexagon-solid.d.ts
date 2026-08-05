import React from 'react';

export interface LanHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonSolid(props: LanHexagonSolidProps): React.ReactElement;
export default LanHexagonSolid;
