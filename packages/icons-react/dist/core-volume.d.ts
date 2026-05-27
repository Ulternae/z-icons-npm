import React from 'react';

export interface CoreVolumeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolume: React.FC<CoreVolumeProps>;
export default CoreVolume;
