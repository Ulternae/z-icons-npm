import React from 'react';

export interface LanBahtSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahtSign: React.FC<LanBahtSignProps>;
export default LanBahtSign;
