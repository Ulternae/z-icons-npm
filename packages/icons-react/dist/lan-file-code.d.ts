import React from 'react';

export interface LanFileCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCode: React.FC<LanFileCodeProps>;
export default LanFileCode;
