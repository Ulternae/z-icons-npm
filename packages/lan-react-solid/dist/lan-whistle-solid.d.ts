import React from 'react';

export interface LanWhistleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhistleSolid(props: LanWhistleSolidProps): React.ReactElement;
export default LanWhistleSolid;
