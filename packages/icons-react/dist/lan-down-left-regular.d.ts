import React from 'react';

export interface LanDownLeftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLeftRegular: React.FC<LanDownLeftRegularProps>;
export default LanDownLeftRegular;
