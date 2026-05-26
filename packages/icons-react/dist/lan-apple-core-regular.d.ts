import React from 'react';

export interface LanAppleCoreRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCoreRegular: React.FC<LanAppleCoreRegularProps>;
export default LanAppleCoreRegular;
