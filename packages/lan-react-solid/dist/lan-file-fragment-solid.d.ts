import React from 'react';

export interface LanFileFragmentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileFragmentSolid(props: LanFileFragmentSolidProps): React.ReactElement;
export default LanFileFragmentSolid;
