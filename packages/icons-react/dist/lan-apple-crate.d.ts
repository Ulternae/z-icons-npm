import React from 'react';

export interface LanAppleCrateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCrate: React.FC<LanAppleCrateProps>;
export default LanAppleCrate;
