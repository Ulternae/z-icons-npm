import React from 'react';

export interface LanValueAbsoluteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanValueAbsoluteSolid(props: LanValueAbsoluteSolidProps): React.ReactElement;
export default LanValueAbsoluteSolid;
