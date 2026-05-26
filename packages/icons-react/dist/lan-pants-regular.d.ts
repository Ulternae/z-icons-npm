import React from 'react';

export interface LanPantsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantsRegular: React.FC<LanPantsRegularProps>;
export default LanPantsRegular;
