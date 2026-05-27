import React from 'react';

export interface CoreGridRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGridRoundSolid: React.FC<CoreGridRoundSolidProps>;
export default CoreGridRoundSolid;
