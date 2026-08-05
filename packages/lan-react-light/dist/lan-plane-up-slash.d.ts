import React from 'react';

export interface LanPlaneUpSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneUpSlash(props: LanPlaneUpSlashProps): React.ReactElement;
export default LanPlaneUpSlash;
