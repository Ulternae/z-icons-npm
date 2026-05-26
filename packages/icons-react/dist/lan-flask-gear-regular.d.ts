import React from 'react';

export interface LanFlaskGearRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskGearRegular: React.FC<LanFlaskGearRegularProps>;
export default LanFlaskGearRegular;
