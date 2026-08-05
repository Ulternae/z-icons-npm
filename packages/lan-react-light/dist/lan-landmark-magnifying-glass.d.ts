import React from 'react';

export interface LanLandmarkMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkMagnifyingGlass(props: LanLandmarkMagnifyingGlassProps): React.ReactElement;
export default LanLandmarkMagnifyingGlass;
