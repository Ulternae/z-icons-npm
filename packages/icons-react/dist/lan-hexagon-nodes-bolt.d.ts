import React from 'react';

export interface LanHexagonNodesBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonNodesBolt: React.FC<LanHexagonNodesBoltProps>;
export default LanHexagonNodesBolt;
