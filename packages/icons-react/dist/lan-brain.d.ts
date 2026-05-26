import React from 'react';

export interface LanBrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrain: React.FC<LanBrainProps>;
export default LanBrain;
