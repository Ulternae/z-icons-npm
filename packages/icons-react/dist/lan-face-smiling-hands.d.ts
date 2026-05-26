import React from 'react';

export interface LanFaceSmilingHandsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilingHands: React.FC<LanFaceSmilingHandsProps>;
export default LanFaceSmilingHands;
