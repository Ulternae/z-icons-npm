import React from 'react';

export interface CoreVolumeXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeXmarkSolid: React.FC<CoreVolumeXmarkSolidProps>;
export default CoreVolumeXmarkSolid;
