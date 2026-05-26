import React from 'react';

export interface LanBlueberriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlueberriesThin: React.FC<LanBlueberriesThinProps>;
export default LanBlueberriesThin;
