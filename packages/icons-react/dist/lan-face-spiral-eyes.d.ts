import React from 'react';

export interface LanFaceSpiralEyesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSpiralEyes: React.FC<LanFaceSpiralEyesProps>;
export default LanFaceSpiralEyes;
