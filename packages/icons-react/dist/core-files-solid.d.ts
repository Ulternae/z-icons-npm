import React from 'react';

export interface CoreFilesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilesSolid: React.FC<CoreFilesSolidProps>;
export default CoreFilesSolid;
