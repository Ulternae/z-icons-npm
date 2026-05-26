import React from 'react';

export interface LanAppleCoreProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCore: React.FC<LanAppleCoreProps>;
export default LanAppleCore;
