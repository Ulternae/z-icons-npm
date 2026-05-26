import React from 'react';

export interface LanStethoscopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStethoscopeRegular: React.FC<LanStethoscopeRegularProps>;
export default LanStethoscopeRegular;
