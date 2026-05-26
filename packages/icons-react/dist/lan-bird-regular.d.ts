import React from 'react';

export interface LanBirdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBirdRegular: React.FC<LanBirdRegularProps>;
export default LanBirdRegular;
