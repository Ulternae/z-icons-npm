import React from 'react';

export interface LanDollyBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyBoxSolid(props: LanDollyBoxSolidProps): React.ReactElement;
export default LanDollyBoxSolid;
