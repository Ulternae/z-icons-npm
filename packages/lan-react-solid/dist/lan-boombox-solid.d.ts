import React from 'react';

export interface LanBoomboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoomboxSolid(props: LanBoomboxSolidProps): React.ReactElement;
export default LanBoomboxSolid;
