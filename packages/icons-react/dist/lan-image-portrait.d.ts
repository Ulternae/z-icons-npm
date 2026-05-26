import React from 'react';

export interface LanImagePortraitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePortrait: React.FC<LanImagePortraitProps>;
export default LanImagePortrait;
