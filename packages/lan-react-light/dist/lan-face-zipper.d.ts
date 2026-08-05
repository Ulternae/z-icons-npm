import React from 'react';

export interface LanFaceZipperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZipper(props: LanFaceZipperProps): React.ReactElement;
export default LanFaceZipper;
