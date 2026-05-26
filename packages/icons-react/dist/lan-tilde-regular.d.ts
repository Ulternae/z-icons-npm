import React from 'react';

export interface LanTildeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTildeRegular: React.FC<LanTildeRegularProps>;
export default LanTildeRegular;
