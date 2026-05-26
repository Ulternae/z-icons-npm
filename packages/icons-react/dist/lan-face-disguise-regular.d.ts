import React from 'react';

export interface LanFaceDisguiseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDisguiseRegular: React.FC<LanFaceDisguiseRegularProps>;
export default LanFaceDisguiseRegular;
