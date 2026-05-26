import React from 'react';

export interface LanTypewriterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTypewriterRegular: React.FC<LanTypewriterRegularProps>;
export default LanTypewriterRegular;
