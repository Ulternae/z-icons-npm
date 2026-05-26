import React from 'react';

export interface LanThumbsDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsDown: React.FC<LanThumbsDownProps>;
export default LanThumbsDown;
