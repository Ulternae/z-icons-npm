import React from 'react';

export interface LanDialHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialHighSolid(props: LanDialHighSolidProps): React.ReactElement;
export default LanDialHighSolid;
