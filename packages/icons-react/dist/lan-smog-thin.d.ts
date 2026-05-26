import React from 'react';

export interface LanSmogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmogThin: React.FC<LanSmogThinProps>;
export default LanSmogThin;
