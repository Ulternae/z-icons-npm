import React from 'react';

export interface LanHexagonPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonPlus(props: LanHexagonPlusProps): React.ReactElement;
export default LanHexagonPlus;
