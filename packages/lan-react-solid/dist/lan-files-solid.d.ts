import React from 'react';

export interface LanFilesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilesSolid(props: LanFilesSolidProps): React.ReactElement;
export default LanFilesSolid;
