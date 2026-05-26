import React from 'react';

export interface LanSquareHryvniaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHryvniaThin: React.FC<LanSquareHryvniaThinProps>;
export default LanSquareHryvniaThin;
