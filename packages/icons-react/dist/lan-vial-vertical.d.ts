import React from 'react';

export interface LanVialVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialVertical: React.FC<LanVialVerticalProps>;
export default LanVialVertical;
