import React from 'react';

export interface NeoThumbsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoThumbsUp: React.FC<NeoThumbsUpProps>;
export default NeoThumbsUp;
