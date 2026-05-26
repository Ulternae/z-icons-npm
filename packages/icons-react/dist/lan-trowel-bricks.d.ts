import React from 'react';

export interface LanTrowelBricksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowelBricks: React.FC<LanTrowelBricksProps>;
export default LanTrowelBricks;
