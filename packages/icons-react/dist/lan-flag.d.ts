import React from 'react';

export interface LanFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlag: React.FC<LanFlagProps>;
export default LanFlag;
