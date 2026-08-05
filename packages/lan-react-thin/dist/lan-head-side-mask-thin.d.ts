import React from 'react';

export interface LanHeadSideMaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideMaskThin(props: LanHeadSideMaskThinProps): React.ReactElement;
export default LanHeadSideMaskThin;
