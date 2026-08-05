import React from 'react';

export interface LanCheeseSwissSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheeseSwissSolid(props: LanCheeseSwissSolidProps): React.ReactElement;
export default LanCheeseSwissSolid;
