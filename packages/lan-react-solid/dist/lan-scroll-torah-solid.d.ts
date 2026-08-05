import React from 'react';

export interface LanScrollTorahSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollTorahSolid(props: LanScrollTorahSolidProps): React.ReactElement;
export default LanScrollTorahSolid;
