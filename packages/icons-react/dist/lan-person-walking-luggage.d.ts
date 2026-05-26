import React from 'react';

export interface LanPersonWalkingLuggageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWalkingLuggage: React.FC<LanPersonWalkingLuggageProps>;
export default LanPersonWalkingLuggage;
