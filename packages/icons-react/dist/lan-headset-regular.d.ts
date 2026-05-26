import React from 'react';

export interface LanHeadsetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadsetRegular: React.FC<LanHeadsetRegularProps>;
export default LanHeadsetRegular;
