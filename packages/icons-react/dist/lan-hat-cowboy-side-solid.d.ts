import React from 'react';

export interface LanHatCowboySideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatCowboySideSolid: React.FC<LanHatCowboySideSolidProps>;
export default LanHatCowboySideSolid;
