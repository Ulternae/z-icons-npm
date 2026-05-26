import React from 'react';

export interface LanFaceGlassesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGlassesRegular: React.FC<LanFaceGlassesRegularProps>;
export default LanFaceGlassesRegular;
