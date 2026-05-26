import React from 'react';

export interface LanHouseSignalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseSignalRegular: React.FC<LanHouseSignalRegularProps>;
export default LanHouseSignalRegular;
