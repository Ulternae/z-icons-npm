import React from 'react';

export interface LanHeadSideBrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideBrainSolid(props: LanHeadSideBrainSolidProps): React.ReactElement;
export default LanHeadSideBrainSolid;
