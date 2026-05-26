import React from 'react';

export interface LanBahtSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahtSignThin: React.FC<LanBahtSignThinProps>;
export default LanBahtSignThin;
