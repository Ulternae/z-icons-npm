import React from 'react';

export interface LanHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagon(props: LanHexagonProps): React.ReactElement;
export default LanHexagon;
