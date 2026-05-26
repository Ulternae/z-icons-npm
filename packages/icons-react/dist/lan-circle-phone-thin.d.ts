import React from 'react';

export interface LanCirclePhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePhoneThin: React.FC<LanCirclePhoneThinProps>;
export default LanCirclePhoneThin;
