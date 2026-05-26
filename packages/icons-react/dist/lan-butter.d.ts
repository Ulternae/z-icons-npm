import React from 'react';

export interface LanButterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanButter: React.FC<LanButterProps>;
export default LanButter;
