import React from 'react';

export interface LanFileZipperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZipperSolid(props: LanFileZipperSolidProps): React.ReactElement;
export default LanFileZipperSolid;
