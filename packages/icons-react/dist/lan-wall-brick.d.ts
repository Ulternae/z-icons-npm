import React from 'react';

export interface LanWallBrickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWallBrick: React.FC<LanWallBrickProps>;
export default LanWallBrick;
