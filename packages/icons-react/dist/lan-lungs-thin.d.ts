import React from 'react';

export interface LanLungsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLungsThin: React.FC<LanLungsThinProps>;
export default LanLungsThin;
