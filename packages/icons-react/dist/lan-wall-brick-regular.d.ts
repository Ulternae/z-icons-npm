import React from 'react';

export interface LanWallBrickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWallBrickRegular: React.FC<LanWallBrickRegularProps>;
export default LanWallBrickRegular;
