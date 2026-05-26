import React from 'react';

export interface LanStaplerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStapler: React.FC<LanStaplerProps>;
export default LanStapler;
