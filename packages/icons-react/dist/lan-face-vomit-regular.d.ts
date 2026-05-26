import React from 'react';

export interface LanFaceVomitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceVomitRegular: React.FC<LanFaceVomitRegularProps>;
export default LanFaceVomitRegular;
