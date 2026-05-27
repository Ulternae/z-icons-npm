import React from 'react';

export interface CoreSkullCrossbonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSkullCrossbonesSolid: React.FC<CoreSkullCrossbonesSolidProps>;
export default CoreSkullCrossbonesSolid;
