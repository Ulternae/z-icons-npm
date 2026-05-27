import React from 'react';

export interface NeoPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPause: React.FC<NeoPauseProps>;
export default NeoPause;
