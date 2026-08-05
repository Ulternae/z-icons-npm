import React from 'react';

export interface LanCapsuleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsuleThin(props: LanCapsuleThinProps): React.ReactElement;
export default LanCapsuleThin;
