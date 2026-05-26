import React from 'react';

export interface LanFaceIciclesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceIcicles: React.FC<LanFaceIciclesProps>;
export default LanFaceIcicles;
