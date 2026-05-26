import React from 'react';

export interface LanHoseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoseRegular: React.FC<LanHoseRegularProps>;
export default LanHoseRegular;
