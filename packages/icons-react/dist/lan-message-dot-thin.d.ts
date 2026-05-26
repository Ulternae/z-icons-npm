import React from 'react';

export interface LanMessageDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageDotThin: React.FC<LanMessageDotThinProps>;
export default LanMessageDotThin;
