import React from 'react';

export interface CoreVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeLowSolid: React.FC<CoreVolumeLowSolidProps>;
export default CoreVolumeLowSolid;
