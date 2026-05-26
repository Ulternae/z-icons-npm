import React from 'react';

export interface LanTricycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTricycle: React.FC<LanTricycleProps>;
export default LanTricycle;
