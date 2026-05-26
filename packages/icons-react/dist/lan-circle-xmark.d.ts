import React from 'react';

export interface LanCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleXmark: React.FC<LanCircleXmarkProps>;
export default LanCircleXmark;
