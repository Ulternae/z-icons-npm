import React from 'react';

export interface LanUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUSolid(props: LanUSolidProps): React.ReactElement;
export default LanUSolid;
