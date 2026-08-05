import React from 'react';

export interface LanFileDocSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDocSolid(props: LanFileDocSolidProps): React.ReactElement;
export default LanFileDocSolid;
