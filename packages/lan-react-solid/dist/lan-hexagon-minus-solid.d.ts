import React from 'react';

export interface LanHexagonMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonMinusSolid(props: LanHexagonMinusSolidProps): React.ReactElement;
export default LanHexagonMinusSolid;
