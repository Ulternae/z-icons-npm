import React from 'react';

export interface LanHandsClappingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsClapping: React.FC<LanHandsClappingProps>;
export default LanHandsClapping;
