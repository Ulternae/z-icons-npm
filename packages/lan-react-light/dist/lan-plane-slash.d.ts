import React from 'react';

export interface LanPlaneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneSlash(props: LanPlaneSlashProps): React.ReactElement;
export default LanPlaneSlash;
