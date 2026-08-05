import React from 'react';

export interface LanLandmarkAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkAlt(props: LanLandmarkAltProps): React.ReactElement;
export default LanLandmarkAlt;
