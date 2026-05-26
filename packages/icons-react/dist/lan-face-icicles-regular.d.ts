import React from 'react';

export interface LanFaceIciclesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceIciclesRegular: React.FC<LanFaceIciclesRegularProps>;
export default LanFaceIciclesRegular;
