import React from 'react';

export interface CoreSignalWeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSignalWeak: React.FC<CoreSignalWeakProps>;
export default CoreSignalWeak;
