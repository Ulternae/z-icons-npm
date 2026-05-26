import React from 'react';

export interface LanHatCowboySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatCowboySolid: React.FC<LanHatCowboySolidProps>;
export default LanHatCowboySolid;
