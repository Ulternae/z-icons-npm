import React from 'react';

export interface LanCloneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloneSolid(props: LanCloneSolidProps): React.ReactElement;
export default LanCloneSolid;
