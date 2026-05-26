import React from 'react';

export interface LanFacePleadingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePleading: React.FC<LanFacePleadingProps>;
export default LanFacePleading;
