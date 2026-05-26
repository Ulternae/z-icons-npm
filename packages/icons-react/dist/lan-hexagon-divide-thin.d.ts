import React from 'react';

export interface LanHexagonDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonDivideThin: React.FC<LanHexagonDivideThinProps>;
export default LanHexagonDivideThin;
