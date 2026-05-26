import React from 'react';

export interface LanCircleTugrikSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTugrikSolid: React.FC<LanCircleTugrikSolidProps>;
export default LanCircleTugrikSolid;
