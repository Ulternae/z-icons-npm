import React from 'react';

export interface LanHatCowboySideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatCowboySideThin: React.FC<LanHatCowboySideThinProps>;
export default LanHatCowboySideThin;
