import React from 'react';

export interface LanTreeLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeLargeSolid(props: LanTreeLargeSolidProps): React.ReactElement;
export default LanTreeLargeSolid;
