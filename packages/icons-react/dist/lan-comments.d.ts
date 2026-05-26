import React from 'react';

export interface LanCommentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComments: React.FC<LanCommentsProps>;
export default LanComments;
