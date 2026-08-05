import React from 'react';

export interface LanHeadSideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideThin(props: LanHeadSideThinProps): React.ReactElement;
export default LanHeadSideThin;
