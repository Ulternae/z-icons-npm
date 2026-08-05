import React from 'react';

export interface LanHexagonNodesBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodesBoltSolid(props: LanHexagonNodesBoltSolidProps): React.ReactElement;
export default LanHexagonNodesBoltSolid;
