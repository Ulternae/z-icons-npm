import React from 'react';

export interface LanThumbsUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbsUpSolid(props: LanThumbsUpSolidProps): React.ReactElement;
export default LanThumbsUpSolid;
