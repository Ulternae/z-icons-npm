import React from 'react';

export interface CoreStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStop: React.FC<CoreStopProps>;
export default CoreStop;
