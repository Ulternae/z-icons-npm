import React from 'react';

export interface LanMessageDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageDot: React.FC<LanMessageDotProps>;
export default LanMessageDot;
