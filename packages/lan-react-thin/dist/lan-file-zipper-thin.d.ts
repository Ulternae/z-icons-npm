import React from 'react';

export interface LanFileZipperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZipperThin(props: LanFileZipperThinProps): React.ReactElement;
export default LanFileZipperThin;
