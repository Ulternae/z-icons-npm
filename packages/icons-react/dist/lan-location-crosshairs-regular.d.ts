import React from 'react';

export interface LanLocationCrosshairsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationCrosshairsRegular: React.FC<LanLocationCrosshairsRegularProps>;
export default LanLocationCrosshairsRegular;
