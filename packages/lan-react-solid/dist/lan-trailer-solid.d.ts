import React from 'react';

export interface LanTrailerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrailerSolid(props: LanTrailerSolidProps): React.ReactElement;
export default LanTrailerSolid;
