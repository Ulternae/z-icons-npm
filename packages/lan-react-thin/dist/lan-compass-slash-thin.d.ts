import React from 'react';

export interface LanCompassSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassSlashThin(props: LanCompassSlashThinProps): React.ReactElement;
export default LanCompassSlashThin;
