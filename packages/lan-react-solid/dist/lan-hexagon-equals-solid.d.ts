import React from 'react';

export interface LanHexagonEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonEqualsSolid(props: LanHexagonEqualsSolidProps): React.ReactElement;
export default LanHexagonEqualsSolid;
