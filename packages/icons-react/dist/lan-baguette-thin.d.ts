import React from 'react';

export interface LanBaguetteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaguetteThin: React.FC<LanBaguetteThinProps>;
export default LanBaguetteThin;
