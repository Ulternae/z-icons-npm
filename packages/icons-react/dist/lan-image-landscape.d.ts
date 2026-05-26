import React from 'react';

export interface LanImageLandscapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageLandscape: React.FC<LanImageLandscapeProps>;
export default LanImageLandscape;
