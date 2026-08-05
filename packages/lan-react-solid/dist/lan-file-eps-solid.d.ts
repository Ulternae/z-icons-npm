import React from 'react';

export interface LanFileEpsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileEpsSolid(props: LanFileEpsSolidProps): React.ReactElement;
export default LanFileEpsSolid;
