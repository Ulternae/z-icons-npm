import React from 'react';

export interface LanFaceExhalingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExhalingRegular: React.FC<LanFaceExhalingRegularProps>;
export default LanFaceExhalingRegular;
