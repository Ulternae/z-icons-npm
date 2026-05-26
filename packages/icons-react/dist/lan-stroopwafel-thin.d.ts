import React from 'react';

export interface LanStroopwafelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStroopwafelThin: React.FC<LanStroopwafelThinProps>;
export default LanStroopwafelThin;
