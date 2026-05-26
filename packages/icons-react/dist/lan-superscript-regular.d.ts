import React from 'react';

export interface LanSuperscriptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuperscriptRegular: React.FC<LanSuperscriptRegularProps>;
export default LanSuperscriptRegular;
