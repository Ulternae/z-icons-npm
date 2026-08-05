import React from 'react';

export interface LanArrowsToCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToCircleSolid(props: LanArrowsToCircleSolidProps): React.ReactElement;
export default LanArrowsToCircleSolid;
