import React from 'react';

export interface LanTally1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally1Solid(props: LanTally1SolidProps): React.ReactElement;
export default LanTally1Solid;
