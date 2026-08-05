import React from 'react';

export interface LanThumbsDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsDownSolid(props: LanThumbsDownSolidProps): React.ReactElement;
export default LanThumbsDownSolid;
