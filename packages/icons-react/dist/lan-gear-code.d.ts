import React from 'react';

export interface LanGearCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearCode: React.FC<LanGearCodeProps>;
export default LanGearCode;
