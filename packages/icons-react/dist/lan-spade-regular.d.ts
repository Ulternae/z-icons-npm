import React from 'react';

export interface LanSpadeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpadeRegular: React.FC<LanSpadeRegularProps>;
export default LanSpadeRegular;
