import React from 'react';

export interface LanStrikethroughRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrikethroughRegular: React.FC<LanStrikethroughRegularProps>;
export default LanStrikethroughRegular;
