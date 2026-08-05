import React from 'react';

export interface LanMinusLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusLargeSolid(props: LanMinusLargeSolidProps): React.ReactElement;
export default LanMinusLargeSolid;
