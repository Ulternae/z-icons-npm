import React from 'react';

export interface MinaCameraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCameraSolid: React.FC<MinaCameraSolidProps>;
export default MinaCameraSolid;
