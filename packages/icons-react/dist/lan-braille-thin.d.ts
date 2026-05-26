import React from 'react';

export interface LanBrailleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrailleThin: React.FC<LanBrailleThinProps>;
export default LanBrailleThin;
