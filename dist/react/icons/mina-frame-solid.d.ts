import React from 'react';

export interface MinaFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFrameSolid: React.FC<MinaFrameSolidProps>;
export default MinaFrameSolid;
