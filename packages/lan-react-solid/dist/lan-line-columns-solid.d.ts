import React from 'react';

export interface LanLineColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineColumnsSolid(props: LanLineColumnsSolidProps): React.ReactElement;
export default LanLineColumnsSolid;
