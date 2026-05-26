import React from 'react';

export interface LanVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeLow: React.FC<LanVolumeLowProps>;
export default LanVolumeLow;
