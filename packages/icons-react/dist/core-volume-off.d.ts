import React from 'react';

export interface CoreVolumeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeOff: React.FC<CoreVolumeOffProps>;
export default CoreVolumeOff;
