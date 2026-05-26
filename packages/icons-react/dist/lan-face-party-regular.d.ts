import React from 'react';

export interface LanFacePartyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePartyRegular: React.FC<LanFacePartyRegularProps>;
export default LanFacePartyRegular;
