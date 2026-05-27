import React from 'react';

export interface CoreThumbsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreThumbsUp: React.FC<CoreThumbsUpProps>;
export default CoreThumbsUp;
