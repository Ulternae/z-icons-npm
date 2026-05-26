import React from 'react';

export interface LanBadgerHoneyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadgerHoneyRegular: React.FC<LanBadgerHoneyRegularProps>;
export default LanBadgerHoneyRegular;
