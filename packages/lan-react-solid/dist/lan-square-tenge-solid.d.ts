import React from 'react';

export interface LanSquareTengeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTengeSolid(props: LanSquareTengeSolidProps): React.ReactElement;
export default LanSquareTengeSolid;
