import React from 'react';

export interface LanBoothCurtainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoothCurtain: React.FC<LanBoothCurtainProps>;
export default LanBoothCurtain;
