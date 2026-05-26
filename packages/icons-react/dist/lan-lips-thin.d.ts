import React from 'react';

export interface LanLipsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLipsThin: React.FC<LanLipsThinProps>;
export default LanLipsThin;
