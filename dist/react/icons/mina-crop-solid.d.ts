import React from 'react';

export interface MinaCropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCropSolid: React.FC<MinaCropSolidProps>;
export default MinaCropSolid;
