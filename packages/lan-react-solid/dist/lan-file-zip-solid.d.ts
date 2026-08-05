import React from 'react';

export interface LanFileZipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZipSolid(props: LanFileZipSolidProps): React.ReactElement;
export default LanFileZipSolid;
