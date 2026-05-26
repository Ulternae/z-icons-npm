import React from 'react';

export interface LanFacePleadingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePleadingRegular: React.FC<LanFacePleadingRegularProps>;
export default LanFacePleadingRegular;
