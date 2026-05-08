import React from 'react';

export interface MinaDatabaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDatabaseSolid: React.FC<MinaDatabaseSolidProps>;
export default MinaDatabaseSolid;
