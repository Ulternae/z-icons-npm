import React from 'react';

export interface LanStretcherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStretcherSolid(props: LanStretcherSolidProps): React.ReactElement;
export default LanStretcherSolid;
