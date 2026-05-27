import React from 'react';

export interface CoreCopySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCopySolid: React.FC<CoreCopySolidProps>;
export default CoreCopySolid;
