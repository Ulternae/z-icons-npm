import React from 'react';

export interface LanMaskFaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaskFaceSolid(props: LanMaskFaceSolidProps): React.ReactElement;
export default LanMaskFaceSolid;
