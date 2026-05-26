import React from 'react';

export interface LanTricycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTricycleRegular: React.FC<LanTricycleRegularProps>;
export default LanTricycleRegular;
