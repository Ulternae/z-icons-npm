import React from 'react';

export interface LanFileZipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZipRegular: React.FC<LanFileZipRegularProps>;
export default LanFileZipRegular;
