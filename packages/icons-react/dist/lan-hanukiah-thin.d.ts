import React from 'react';

export interface LanHanukiahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHanukiahThin: React.FC<LanHanukiahThinProps>;
export default LanHanukiahThin;
