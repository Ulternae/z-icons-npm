import React from 'react';

export interface LanFaceSleepingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSleeping(props: LanFaceSleepingProps): React.ReactElement;
export default LanFaceSleeping;
