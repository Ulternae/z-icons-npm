import React from 'react';

export interface MinaCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCopySolid: React.FC<MinaCopySolidProps>;
export default MinaCopySolid;
