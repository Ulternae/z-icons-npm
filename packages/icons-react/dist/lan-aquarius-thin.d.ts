import React from 'react';

export interface LanAquariusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAquariusThin: React.FC<LanAquariusThinProps>;
export default LanAquariusThin;
