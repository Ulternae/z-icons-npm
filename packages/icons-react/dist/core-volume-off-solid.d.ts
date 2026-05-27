import React from 'react';

export interface CoreVolumeOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeOffSolid: React.FC<CoreVolumeOffSolidProps>;
export default CoreVolumeOffSolid;
