import React from 'react';

export interface LanHexagonImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonImageThin: React.FC<LanHexagonImageThinProps>;
export default LanHexagonImageThin;
