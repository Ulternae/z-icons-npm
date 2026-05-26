import React from 'react';

export interface LanScreencastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScreencast: React.FC<LanScreencastProps>;
export default LanScreencast;
