import React from 'react';

export interface LanNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNSolid(props: LanNSolidProps): React.ReactElement;
export default LanNSolid;
