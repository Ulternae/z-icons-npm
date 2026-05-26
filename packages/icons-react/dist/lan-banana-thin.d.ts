import React from 'react';

export interface LanBananaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBananaThin: React.FC<LanBananaThinProps>;
export default LanBananaThin;
