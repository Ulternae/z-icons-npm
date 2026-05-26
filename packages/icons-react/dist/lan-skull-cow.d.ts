import React from 'react';

export interface LanSkullCowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullCow: React.FC<LanSkullCowProps>;
export default LanSkullCow;
