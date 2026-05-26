import React from 'react';

export interface LanTireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireRegular: React.FC<LanTireRegularProps>;
export default LanTireRegular;
