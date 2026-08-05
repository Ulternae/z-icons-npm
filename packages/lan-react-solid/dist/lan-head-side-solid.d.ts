import React from 'react';

export interface LanHeadSideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideSolid(props: LanHeadSideSolidProps): React.ReactElement;
export default LanHeadSideSolid;
