import React from 'react';

export interface LanBacteriaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBacteriaThin: React.FC<LanBacteriaThinProps>;
export default LanBacteriaThin;
