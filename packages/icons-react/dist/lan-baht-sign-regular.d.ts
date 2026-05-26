import React from 'react';

export interface LanBahtSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahtSignRegular: React.FC<LanBahtSignRegularProps>;
export default LanBahtSignRegular;
