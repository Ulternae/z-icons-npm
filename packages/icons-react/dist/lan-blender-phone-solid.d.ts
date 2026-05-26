import React from 'react';

export interface LanBlenderPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlenderPhoneSolid: React.FC<LanBlenderPhoneSolidProps>;
export default LanBlenderPhoneSolid;
