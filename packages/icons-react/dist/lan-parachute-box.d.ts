import React from 'react';

export interface LanParachuteBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParachuteBox: React.FC<LanParachuteBoxProps>;
export default LanParachuteBox;
