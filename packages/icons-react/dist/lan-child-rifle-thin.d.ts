import React from 'react';

export interface LanChildRifleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildRifleThin: React.FC<LanChildRifleThinProps>;
export default LanChildRifleThin;
