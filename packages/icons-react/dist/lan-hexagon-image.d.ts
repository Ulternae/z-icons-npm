import React from 'react';

export interface LanHexagonImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonImage: React.FC<LanHexagonImageProps>;
export default LanHexagonImage;
