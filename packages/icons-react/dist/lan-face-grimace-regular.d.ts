import React from 'react';

export interface LanFaceGrimaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrimaceRegular: React.FC<LanFaceGrimaceRegularProps>;
export default LanFaceGrimaceRegular;
