import React from 'react';

export interface CoreVolumeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeSolid: React.FC<CoreVolumeSolidProps>;
export default CoreVolumeSolid;
