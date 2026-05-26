import React from 'react';

export interface LanTreePalmThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreePalmThin: React.FC<LanTreePalmThinProps>;
export default LanTreePalmThin;
