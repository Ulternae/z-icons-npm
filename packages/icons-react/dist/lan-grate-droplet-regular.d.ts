import React from 'react';

export interface LanGrateDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrateDropletRegular: React.FC<LanGrateDropletRegularProps>;
export default LanGrateDropletRegular;
