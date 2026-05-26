import React from 'react';

export interface LanDesktopCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopCodeRegular: React.FC<LanDesktopCodeRegularProps>;
export default LanDesktopCodeRegular;
