import React from 'react';

export interface MinaBookCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookCheckSolid: React.FC<MinaBookCheckSolidProps>;
export default MinaBookCheckSolid;
