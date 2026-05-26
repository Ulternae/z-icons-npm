import React from 'react';

export interface LanSquareDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashed: React.FC<LanSquareDashedProps>;
export default LanSquareDashed;
