import React from 'react';

export interface LanGopuramThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGopuramThin: React.FC<LanGopuramThinProps>;
export default LanGopuramThin;
