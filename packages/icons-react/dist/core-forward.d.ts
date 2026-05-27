import React from 'react';

export interface CoreForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreForward: React.FC<CoreForwardProps>;
export default CoreForward;
