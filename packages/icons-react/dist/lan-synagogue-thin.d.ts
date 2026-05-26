import React from 'react';

export interface LanSynagogueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSynagogueThin: React.FC<LanSynagogueThinProps>;
export default LanSynagogueThin;
