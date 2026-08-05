import React from 'react';

export interface LanChopsticksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChopsticksSolid(props: LanChopsticksSolidProps): React.ReactElement;
export default LanChopsticksSolid;
