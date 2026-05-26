import React from 'react';

export interface LanGopuramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGopuram: React.FC<LanGopuramProps>;
export default LanGopuram;
