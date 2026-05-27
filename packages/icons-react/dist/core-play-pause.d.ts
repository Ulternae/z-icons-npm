import React from 'react';

export interface CorePlayPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlayPause: React.FC<CorePlayPauseProps>;
export default CorePlayPause;
