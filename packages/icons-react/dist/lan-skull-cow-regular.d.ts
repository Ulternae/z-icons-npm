import React from 'react';

export interface LanSkullCowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullCowRegular: React.FC<LanSkullCowRegularProps>;
export default LanSkullCowRegular;
