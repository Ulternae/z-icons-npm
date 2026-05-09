import React from 'react';

export interface MinaBathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBathSolid: React.FC<MinaBathSolidProps>;
export default MinaBathSolid;
