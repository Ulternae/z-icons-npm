import React from 'react';

export interface LanArrowsRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsRotateSolid(props: LanArrowsRotateSolidProps): React.ReactElement;
export default LanArrowsRotateSolid;
