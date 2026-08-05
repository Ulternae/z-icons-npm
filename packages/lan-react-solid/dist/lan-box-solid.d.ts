import React from 'react';

export interface LanBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxSolid(props: LanBoxSolidProps): React.ReactElement;
export default LanBoxSolid;
