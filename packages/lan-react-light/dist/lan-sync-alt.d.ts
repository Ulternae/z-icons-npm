import React from 'react';

export interface LanSyncAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSyncAlt(props: LanSyncAltProps): React.ReactElement;
export default LanSyncAlt;
