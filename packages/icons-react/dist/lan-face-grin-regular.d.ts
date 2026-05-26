import React from 'react';

export interface LanFaceGrinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinRegular: React.FC<LanFaceGrinRegularProps>;
export default LanFaceGrinRegular;
