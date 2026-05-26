import React from 'react';

export interface LanBringFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBringFrontThin: React.FC<LanBringFrontThinProps>;
export default LanBringFrontThin;
