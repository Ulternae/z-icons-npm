import React from 'react';

export interface CoreVolumeXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeXmark: React.FC<CoreVolumeXmarkProps>;
export default CoreVolumeXmark;
