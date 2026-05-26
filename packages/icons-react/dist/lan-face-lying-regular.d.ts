import React from 'react';

export interface LanFaceLyingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLyingRegular: React.FC<LanFaceLyingRegularProps>;
export default LanFaceLyingRegular;
