import React from 'react';

export interface LanRectangleLandscapeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleLandscape: React.FC<LanRectangleLandscapeProps>;
export default LanRectangleLandscape;
