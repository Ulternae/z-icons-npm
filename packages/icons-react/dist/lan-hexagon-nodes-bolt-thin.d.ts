import React from 'react';

export interface LanHexagonNodesBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonNodesBoltThin: React.FC<LanHexagonNodesBoltThinProps>;
export default LanHexagonNodesBoltThin;
