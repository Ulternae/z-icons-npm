import React from 'react';

export interface LanAppleCrateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCrateRegular: React.FC<LanAppleCrateRegularProps>;
export default LanAppleCrateRegular;
