import React from 'react';

export interface LanSausageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSausageThin: React.FC<LanSausageThinProps>;
export default LanSausageThin;
