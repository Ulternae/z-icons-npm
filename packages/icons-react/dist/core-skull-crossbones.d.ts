import React from 'react';

export interface CoreSkullCrossbonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSkullCrossbones: React.FC<CoreSkullCrossbonesProps>;
export default CoreSkullCrossbones;
