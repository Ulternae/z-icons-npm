import React from 'react';

export interface MinaCakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCakeSolid: React.FC<MinaCakeSolidProps>;
export default MinaCakeSolid;
