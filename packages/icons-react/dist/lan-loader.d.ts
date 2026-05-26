import React from 'react';

export interface LanLoaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLoader: React.FC<LanLoaderProps>;
export default LanLoader;
