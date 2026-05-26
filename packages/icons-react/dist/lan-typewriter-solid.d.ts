import React from 'react';

export interface LanTypewriterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTypewriterSolid: React.FC<LanTypewriterSolidProps>;
export default LanTypewriterSolid;
