import React from 'react';

export interface LanOwlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOwlSolid(props: LanOwlSolidProps): React.ReactElement;
export default LanOwlSolid;
