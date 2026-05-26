import React from 'react';

export interface LanBinRecycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinRecycleThin: React.FC<LanBinRecycleThinProps>;
export default LanBinRecycleThin;
