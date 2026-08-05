import React from 'react';

export interface LanHeadSideGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideGear(props: LanHeadSideGearProps): React.ReactElement;
export default LanHeadSideGear;
