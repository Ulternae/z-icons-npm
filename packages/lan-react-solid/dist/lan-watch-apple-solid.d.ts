import React from 'react';

export interface LanWatchAppleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchAppleSolid(props: LanWatchAppleSolidProps): React.ReactElement;
export default LanWatchAppleSolid;
