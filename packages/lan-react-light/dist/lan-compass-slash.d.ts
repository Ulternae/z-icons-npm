import React from 'react';

export interface LanCompassSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassSlash(props: LanCompassSlashProps): React.ReactElement;
export default LanCompassSlash;
