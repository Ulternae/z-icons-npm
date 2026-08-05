import React from 'react';

export interface LanFrostyHeadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrostyHeadThin(props: LanFrostyHeadThinProps): React.ReactElement;
export default LanFrostyHeadThin;
