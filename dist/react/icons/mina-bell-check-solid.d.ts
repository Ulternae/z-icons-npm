import React from 'react';

export interface MinaBellCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellCheckSolid: React.FC<MinaBellCheckSolidProps>;
export default MinaBellCheckSolid;
