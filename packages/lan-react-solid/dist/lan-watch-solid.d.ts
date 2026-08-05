import React from 'react';

export interface LanWatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchSolid(props: LanWatchSolidProps): React.ReactElement;
export default LanWatchSolid;
