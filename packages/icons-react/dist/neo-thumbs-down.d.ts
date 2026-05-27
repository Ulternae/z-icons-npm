import React from 'react';

export interface NeoThumbsDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbsDown: React.FC<NeoThumbsDownProps>;
export default NeoThumbsDown;
