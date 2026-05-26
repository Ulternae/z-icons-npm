import React from 'react';

export interface LanMehRollingEyesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMehRollingEyes: React.FC<LanMehRollingEyesProps>;
export default LanMehRollingEyes;
