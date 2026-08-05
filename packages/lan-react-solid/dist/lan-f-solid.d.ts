import React from 'react';

export interface LanFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFSolid(props: LanFSolidProps): React.ReactElement;
export default LanFSolid;
