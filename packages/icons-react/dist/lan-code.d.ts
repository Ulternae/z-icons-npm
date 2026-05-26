import React from 'react';

export interface LanCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCode: React.FC<LanCodeProps>;
export default LanCode;
