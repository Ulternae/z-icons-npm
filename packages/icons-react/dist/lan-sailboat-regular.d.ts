import React from 'react';

export interface LanSailboatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSailboatRegular: React.FC<LanSailboatRegularProps>;
export default LanSailboatRegular;
