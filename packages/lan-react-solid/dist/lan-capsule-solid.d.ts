import React from 'react';

export interface LanCapsuleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsuleSolid(props: LanCapsuleSolidProps): React.ReactElement;
export default LanCapsuleSolid;
