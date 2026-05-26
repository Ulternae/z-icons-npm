import React from 'react';

export interface LanFaceLaughBeamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughBeamRegular: React.FC<LanFaceLaughBeamRegularProps>;
export default LanFaceLaughBeamRegular;
