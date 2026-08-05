import React from 'react';

export interface LanPlaneSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneSlashThin(props: LanPlaneSlashThinProps): React.ReactElement;
export default LanPlaneSlashThin;
