import React from 'react';

export interface LanSyringeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSyringeThin: React.FC<LanSyringeThinProps>;
export default LanSyringeThin;
