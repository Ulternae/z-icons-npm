import React from 'react';

export interface LanRssSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRssSolid(props: LanRssSolidProps): React.ReactElement;
export default LanRssSolid;
