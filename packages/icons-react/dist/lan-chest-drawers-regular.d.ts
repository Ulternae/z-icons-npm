import React from 'react';

export interface LanChestDrawersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChestDrawersRegular: React.FC<LanChestDrawersRegularProps>;
export default LanChestDrawersRegular;
