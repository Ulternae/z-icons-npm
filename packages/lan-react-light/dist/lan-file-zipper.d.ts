import React from 'react';

export interface LanFileZipperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZipper(props: LanFileZipperProps): React.ReactElement;
export default LanFileZipper;
