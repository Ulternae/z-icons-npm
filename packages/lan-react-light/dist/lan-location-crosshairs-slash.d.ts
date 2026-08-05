import React from 'react';

export interface LanLocationCrosshairsSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocationCrosshairsSlash(props: LanLocationCrosshairsSlashProps): React.ReactElement;
export default LanLocationCrosshairsSlash;
