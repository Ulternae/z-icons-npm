import React from 'react';

export interface LanButterflySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanButterflySolid(props: LanButterflySolidProps): React.ReactElement;
export default LanButterflySolid;
