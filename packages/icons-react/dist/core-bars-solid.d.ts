import React from 'react';

export interface CoreBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBarsSolid: React.FC<CoreBarsSolidProps>;
export default CoreBarsSolid;
