import React from 'react';

export interface LanFaceSmilingHandsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilingHandsRegular: React.FC<LanFaceSmilingHandsRegularProps>;
export default LanFaceSmilingHandsRegular;
