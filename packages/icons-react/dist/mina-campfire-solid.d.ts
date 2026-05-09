import React from 'react';

export interface MinaCampfireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCampfireSolid: React.FC<MinaCampfireSolidProps>;
export default MinaCampfireSolid;
