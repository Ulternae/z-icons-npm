import React from 'react';

export interface MinaRepeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRepeatSolid: React.FC<MinaRepeatSolidProps>;
export default MinaRepeatSolid;
