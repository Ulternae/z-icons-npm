import React from 'react';

export interface MinaDangerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerSolid: React.FC<MinaDangerSolidProps>;
export default MinaDangerSolid;
