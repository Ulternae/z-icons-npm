import React from 'react';

export interface MinaCogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogSolid: React.FC<MinaCogSolidProps>;
export default MinaCogSolid;
