import React from 'react';

export interface LanAppleCrateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAppleCrateSolid(props: LanAppleCrateSolidProps): React.ReactElement;
export default LanAppleCrateSolid;
