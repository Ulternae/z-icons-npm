import React from 'react';

export interface LanDisplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplaySolid(props: LanDisplaySolidProps): React.ReactElement;
export default LanDisplaySolid;
