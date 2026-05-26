import React from 'react';

export interface LanFaceLyingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLying: React.FC<LanFaceLyingProps>;
export default LanFaceLying;
