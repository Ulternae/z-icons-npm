import React from 'react';

export interface NeoCommentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoComments: React.FC<NeoCommentsProps>;
export default NeoComments;
