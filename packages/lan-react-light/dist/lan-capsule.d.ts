import React from 'react';

export interface LanCapsuleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsule(props: LanCapsuleProps): React.ReactElement;
export default LanCapsule;
