import React from 'react';

export interface LanHexagonDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonDivideSolid(props: LanHexagonDivideSolidProps): React.ReactElement;
export default LanHexagonDivideSolid;
