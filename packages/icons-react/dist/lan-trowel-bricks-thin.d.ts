import React from 'react';

export interface LanTrowelBricksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrowelBricksThin: React.FC<LanTrowelBricksThinProps>;
export default LanTrowelBricksThin;
