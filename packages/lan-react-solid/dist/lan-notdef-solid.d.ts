import React from 'react';

export interface LanNotdefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNotdefSolid(props: LanNotdefSolidProps): React.ReactElement;
export default LanNotdefSolid;
