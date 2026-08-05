import React from 'react';

export interface LanMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusSolid(props: LanMinusSolidProps): React.ReactElement;
export default LanMinusSolid;
