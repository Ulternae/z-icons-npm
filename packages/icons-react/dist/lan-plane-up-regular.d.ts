import React from 'react';

export interface LanPlaneUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneUpRegular: React.FC<LanPlaneUpRegularProps>;
export default LanPlaneUpRegular;
