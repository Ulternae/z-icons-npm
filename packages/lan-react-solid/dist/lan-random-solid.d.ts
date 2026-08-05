import React from 'react';

export interface LanRandomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRandomSolid(props: LanRandomSolidProps): React.ReactElement;
export default LanRandomSolid;
