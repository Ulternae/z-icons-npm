import React from 'react';

export interface LanTeethOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeethOpenRegular: React.FC<LanTeethOpenRegularProps>;
export default LanTeethOpenRegular;
