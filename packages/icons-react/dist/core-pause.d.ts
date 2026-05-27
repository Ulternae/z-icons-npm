import React from 'react';

export interface CorePauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePause: React.FC<CorePauseProps>;
export default CorePause;
