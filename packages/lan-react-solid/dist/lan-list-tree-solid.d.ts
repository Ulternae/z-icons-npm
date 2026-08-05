import React from 'react';

export interface LanListTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTreeSolid(props: LanListTreeSolidProps): React.ReactElement;
export default LanListTreeSolid;
