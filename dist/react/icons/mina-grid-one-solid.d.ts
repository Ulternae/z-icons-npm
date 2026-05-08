import React from 'react';

export interface MinaGridOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGridOneSolid: React.FC<MinaGridOneSolidProps>;
export default MinaGridOneSolid;
