import React from 'react';

export interface LanLandmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmark(props: LanLandmarkProps): React.ReactElement;
export default LanLandmark;
