import React from 'react';

export interface LanStarShootingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarShootingRegular: React.FC<LanStarShootingRegularProps>;
export default LanStarShootingRegular;
