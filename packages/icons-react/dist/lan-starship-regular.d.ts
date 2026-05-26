import React from 'react';

export interface LanStarshipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarshipRegular: React.FC<LanStarshipRegularProps>;
export default LanStarshipRegular;
