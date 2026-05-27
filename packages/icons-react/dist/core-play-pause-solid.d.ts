import React from 'react';

export interface CorePlayPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlayPauseSolid: React.FC<CorePlayPauseSolidProps>;
export default CorePlayPauseSolid;
