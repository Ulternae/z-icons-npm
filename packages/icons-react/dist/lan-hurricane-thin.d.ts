import React from 'react';

export interface LanHurricaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHurricaneThin: React.FC<LanHurricaneThinProps>;
export default LanHurricaneThin;
