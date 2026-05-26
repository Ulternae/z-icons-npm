import React from 'react';

export interface LanSackXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackXmark: React.FC<LanSackXmarkProps>;
export default LanSackXmark;
