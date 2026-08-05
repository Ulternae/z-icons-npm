import React from 'react';

export interface LanSquareUpLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareUpLeftSolid(props: LanSquareUpLeftSolidProps): React.ReactElement;
export default LanSquareUpLeftSolid;
