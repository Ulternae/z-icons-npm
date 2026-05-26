import React from 'react';

export interface LanHexagonImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonImageSolid: React.FC<LanHexagonImageSolidProps>;
export default LanHexagonImageSolid;
