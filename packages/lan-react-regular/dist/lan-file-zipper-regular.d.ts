import React from 'react';

export interface LanFileZipperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZipperRegular(props: LanFileZipperRegularProps): React.ReactElement;
export default LanFileZipperRegular;
