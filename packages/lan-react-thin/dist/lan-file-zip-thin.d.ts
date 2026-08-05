import React from 'react';

export interface LanFileZipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZipThin(props: LanFileZipThinProps): React.ReactElement;
export default LanFileZipThin;
