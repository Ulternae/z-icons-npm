import React from 'react';

export interface LanStomachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStomach: React.FC<LanStomachProps>;
export default LanStomach;
