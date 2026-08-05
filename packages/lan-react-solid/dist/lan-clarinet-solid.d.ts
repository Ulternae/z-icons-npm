import React from 'react';

export interface LanClarinetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClarinetSolid(props: LanClarinetSolidProps): React.ReactElement;
export default LanClarinetSolid;
