import React from 'react';

export interface LanStarshipFreighterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarshipFreighterRegular: React.FC<LanStarshipFreighterRegularProps>;
export default LanStarshipFreighterRegular;
