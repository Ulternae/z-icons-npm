import React from 'react';

export interface LanPickaxeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickaxeRegular: React.FC<LanPickaxeRegularProps>;
export default LanPickaxeRegular;
