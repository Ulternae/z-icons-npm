import React from 'react';

export interface MinaPresentationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPresentationSolid: React.FC<MinaPresentationSolidProps>;
export default MinaPresentationSolid;
