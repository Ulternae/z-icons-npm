import React from 'react';

export interface LanArrowsToEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToEyeSolid(props: LanArrowsToEyeSolidProps): React.ReactElement;
export default LanArrowsToEyeSolid;
