import React from 'react';

export interface LanScreencastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScreencastSolid(props: LanScreencastSolidProps): React.ReactElement;
export default LanScreencastSolid;
