import React from 'react';

export interface LanBraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBraThin: React.FC<LanBraThinProps>;
export default LanBraThin;
