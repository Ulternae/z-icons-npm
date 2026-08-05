import React from 'react';

export interface LanBringFrontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBringFrontSolid(props: LanBringFrontSolidProps): React.ReactElement;
export default LanBringFrontSolid;
