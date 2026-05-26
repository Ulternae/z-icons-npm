import React from 'react';

export interface LanFaceGrinBeamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinBeamRegular: React.FC<LanFaceGrinBeamRegularProps>;
export default LanFaceGrinBeamRegular;
