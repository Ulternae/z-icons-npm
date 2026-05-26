import React from 'react';

export interface LanGlassWhiskeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWhiskeyRegular: React.FC<LanGlassWhiskeyRegularProps>;
export default LanGlassWhiskeyRegular;
