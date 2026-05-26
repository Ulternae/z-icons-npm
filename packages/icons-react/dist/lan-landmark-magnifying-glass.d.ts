import React from 'react';

export interface LanLandmarkMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkMagnifyingGlass: React.FC<LanLandmarkMagnifyingGlassProps>;
export default LanLandmarkMagnifyingGlass;
