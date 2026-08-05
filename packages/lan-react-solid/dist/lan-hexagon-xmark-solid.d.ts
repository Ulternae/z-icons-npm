import React from 'react';

export interface LanHexagonXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonXmarkSolid(props: LanHexagonXmarkSolidProps): React.ReactElement;
export default LanHexagonXmarkSolid;
