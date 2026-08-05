import React from 'react';

export interface LanHexagonPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonPlusSolid(props: LanHexagonPlusSolidProps): React.ReactElement;
export default LanHexagonPlusSolid;
