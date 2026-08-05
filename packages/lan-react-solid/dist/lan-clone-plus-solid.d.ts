import React from 'react';

export interface LanClonePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClonePlusSolid(props: LanClonePlusSolidProps): React.ReactElement;
export default LanClonePlusSolid;
