import React from 'react';

export interface LanCircleHryvniaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHryvniaThin: React.FC<LanCircleHryvniaThinProps>;
export default LanCircleHryvniaThin;
