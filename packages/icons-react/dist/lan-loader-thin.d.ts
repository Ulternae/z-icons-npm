import React from 'react';

export interface LanLoaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLoaderThin: React.FC<LanLoaderThinProps>;
export default LanLoaderThin;
