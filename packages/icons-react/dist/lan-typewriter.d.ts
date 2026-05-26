import React from 'react';

export interface LanTypewriterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTypewriter: React.FC<LanTypewriterProps>;
export default LanTypewriter;
