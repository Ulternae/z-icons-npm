import React from 'react';

export interface LanSdCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSdCardRegular: React.FC<LanSdCardRegularProps>;
export default LanSdCardRegular;
