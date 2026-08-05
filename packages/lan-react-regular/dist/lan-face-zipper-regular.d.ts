import React from 'react';

export interface LanFaceZipperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZipperRegular(props: LanFaceZipperRegularProps): React.ReactElement;
export default LanFaceZipperRegular;
