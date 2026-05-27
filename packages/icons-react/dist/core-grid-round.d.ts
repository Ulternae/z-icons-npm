import React from 'react';

export interface CoreGridRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGridRound: React.FC<CoreGridRoundProps>;
export default CoreGridRound;
