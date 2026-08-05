import React from 'react';

export interface LanHeartSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartSlashThin(props: LanHeartSlashThinProps): React.ReactElement;
export default LanHeartSlashThin;
