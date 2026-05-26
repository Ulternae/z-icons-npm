import React from 'react';

export interface LanWalkerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalker: React.FC<LanWalkerProps>;
export default LanWalker;
