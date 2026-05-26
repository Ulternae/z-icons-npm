import React from 'react';

export interface LanBacteriaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBacteriaRegular: React.FC<LanBacteriaRegularProps>;
export default LanBacteriaRegular;
