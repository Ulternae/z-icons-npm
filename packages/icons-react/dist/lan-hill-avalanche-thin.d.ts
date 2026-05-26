import React from 'react';

export interface LanHillAvalancheThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillAvalancheThin: React.FC<LanHillAvalancheThinProps>;
export default LanHillAvalancheThin;
