import React from 'react';

export interface LanFaceGlassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGlasses: React.FC<LanFaceGlassesProps>;
export default LanFaceGlasses;
