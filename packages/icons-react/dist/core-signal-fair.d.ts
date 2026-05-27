import React from 'react';

export interface CoreSignalFairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSignalFair: React.FC<CoreSignalFairProps>;
export default CoreSignalFair;
