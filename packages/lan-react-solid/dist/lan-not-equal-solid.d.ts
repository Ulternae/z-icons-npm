import React from 'react';

export interface LanNotEqualSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotEqualSolid(props: LanNotEqualSolidProps): React.ReactElement;
export default LanNotEqualSolid;
