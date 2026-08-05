import React from 'react';

export interface LanUpLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpLeftSolid(props: LanUpLeftSolidProps): React.ReactElement;
export default LanUpLeftSolid;
