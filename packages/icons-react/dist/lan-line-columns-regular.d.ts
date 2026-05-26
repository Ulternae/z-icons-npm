import React from 'react';

export interface LanLineColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineColumnsRegular: React.FC<LanLineColumnsRegularProps>;
export default LanLineColumnsRegular;
