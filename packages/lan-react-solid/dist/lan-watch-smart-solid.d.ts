import React from 'react';

export interface LanWatchSmartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchSmartSolid(props: LanWatchSmartSolidProps): React.ReactElement;
export default LanWatchSmartSolid;
