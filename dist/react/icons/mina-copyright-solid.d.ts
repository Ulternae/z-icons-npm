import React from 'react';

export interface MinaCopyrightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCopyrightSolid: React.FC<MinaCopyrightSolidProps>;
export default MinaCopyrightSolid;
