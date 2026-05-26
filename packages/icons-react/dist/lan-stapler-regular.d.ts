import React from 'react';

export interface LanStaplerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStaplerRegular: React.FC<LanStaplerRegularProps>;
export default LanStaplerRegular;
