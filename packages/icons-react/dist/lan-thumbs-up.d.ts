import React from 'react';

export interface LanThumbsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsUp: React.FC<LanThumbsUpProps>;
export default LanThumbsUp;
