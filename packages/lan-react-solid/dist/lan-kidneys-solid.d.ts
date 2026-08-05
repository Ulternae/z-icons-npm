import React from 'react';

export interface LanKidneysSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKidneysSolid(props: LanKidneysSolidProps): React.ReactElement;
export default LanKidneysSolid;
