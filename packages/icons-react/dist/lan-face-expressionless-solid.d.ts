import React from 'react';

export interface LanFaceExpressionlessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExpressionlessSolid: React.FC<LanFaceExpressionlessSolidProps>;
export default LanFaceExpressionlessSolid;
