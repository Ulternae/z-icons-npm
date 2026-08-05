import React from 'react';

export interface LanEyesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyesSolid(props: LanEyesSolidProps): React.ReactElement;
export default LanEyesSolid;
