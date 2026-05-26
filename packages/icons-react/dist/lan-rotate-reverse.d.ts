import React from 'react';

export interface LanRotateReverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRotateReverse: React.FC<LanRotateReverseProps>;
export default LanRotateReverse;
