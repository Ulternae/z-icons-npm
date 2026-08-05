import React from 'react';

export interface LanHeadSideMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideMask(props: LanHeadSideMaskProps): React.ReactElement;
export default LanHeadSideMask;
