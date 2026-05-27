import React from 'react';

export interface CoreUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUsersSolid: React.FC<CoreUsersSolidProps>;
export default CoreUsersSolid;
