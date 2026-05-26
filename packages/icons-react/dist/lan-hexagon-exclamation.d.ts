import React from 'react';

export interface LanHexagonExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonExclamation: React.FC<LanHexagonExclamationProps>;
export default LanHexagonExclamation;
