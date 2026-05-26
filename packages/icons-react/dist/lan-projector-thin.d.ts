import React from 'react';

export interface LanProjectorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanProjectorThin: React.FC<LanProjectorThinProps>;
export default LanProjectorThin;
