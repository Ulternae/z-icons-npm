import React from 'react';

export interface LanFaceZipperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZipperThin(props: LanFaceZipperThinProps): React.ReactElement;
export default LanFaceZipperThin;
