import React from 'react';

export interface LanMugMarshmallowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugMarshmallowsSolid(props: LanMugMarshmallowsSolidProps): React.ReactElement;
export default LanMugMarshmallowsSolid;
