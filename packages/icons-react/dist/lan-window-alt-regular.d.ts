import React from 'react';

export interface LanWindowAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowAltRegular: React.FC<LanWindowAltRegularProps>;
export default LanWindowAltRegular;
