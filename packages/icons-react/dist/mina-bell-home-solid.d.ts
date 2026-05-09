import React from 'react';

export interface MinaBellHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellHomeSolid: React.FC<MinaBellHomeSolidProps>;
export default MinaBellHomeSolid;
