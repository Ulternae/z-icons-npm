import React from 'react';

export interface LanBoltAutoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltAutoRegular: React.FC<LanBoltAutoRegularProps>;
export default LanBoltAutoRegular;
