import React from 'react';

export interface LanCassetteTapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteTapeSolid(props: LanCassetteTapeSolidProps): React.ReactElement;
export default LanCassetteTapeSolid;
