import React from 'react';

export interface LanArrowsToDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToDotSolid(props: LanArrowsToDotSolidProps): React.ReactElement;
export default LanArrowsToDotSolid;
