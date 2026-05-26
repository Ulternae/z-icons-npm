import React from 'react';

export interface LanUserCowboySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCowboySolid: React.FC<LanUserCowboySolidProps>;
export default LanUserCowboySolid;
