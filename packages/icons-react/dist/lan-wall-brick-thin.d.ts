import React from 'react';

export interface LanWallBrickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWallBrickThin: React.FC<LanWallBrickThinProps>;
export default LanWallBrickThin;
