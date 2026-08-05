import React from 'react';

export interface LanWindowRestoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowRestoreSolid(props: LanWindowRestoreSolidProps): React.ReactElement;
export default LanWindowRestoreSolid;
