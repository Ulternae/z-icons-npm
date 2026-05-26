import React from 'react';

export interface LanStoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoolRegular: React.FC<LanStoolRegularProps>;
export default LanStoolRegular;
