import React from 'react';

export interface LanSquareCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCode: React.FC<LanSquareCodeProps>;
export default LanSquareCode;
