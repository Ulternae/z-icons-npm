import React from 'react';

export interface CoreCompressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompressSolid: React.FC<CoreCompressSolidProps>;
export default CoreCompressSolid;
