import React from 'react';

export interface LanFireFlameSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameSimpleSolid(props: LanFireFlameSimpleSolidProps): React.ReactElement;
export default LanFireFlameSimpleSolid;
