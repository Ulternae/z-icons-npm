import React from 'react';

export interface LanHeartCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleXmark: React.FC<LanHeartCircleXmarkProps>;
export default LanHeartCircleXmark;
