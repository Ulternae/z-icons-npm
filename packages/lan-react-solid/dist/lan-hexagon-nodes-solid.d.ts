import React from 'react';

export interface LanHexagonNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonNodesSolid(props: LanHexagonNodesSolidProps): React.ReactElement;
export default LanHexagonNodesSolid;
