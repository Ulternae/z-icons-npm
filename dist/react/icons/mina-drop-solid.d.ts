import React from 'react';

export interface MinaDropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDropSolid: React.FC<MinaDropSolidProps>;
export default MinaDropSolid;
