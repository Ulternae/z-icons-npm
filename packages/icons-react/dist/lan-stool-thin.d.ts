import React from 'react';

export interface LanStoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoolThin: React.FC<LanStoolThinProps>;
export default LanStoolThin;
