import React from 'react';

export interface LanFaceViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceViewfinderRegular: React.FC<LanFaceViewfinderRegularProps>;
export default LanFaceViewfinderRegular;
