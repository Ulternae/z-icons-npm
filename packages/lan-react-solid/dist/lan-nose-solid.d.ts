import React from 'react';

export interface LanNoseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoseSolid(props: LanNoseSolidProps): React.ReactElement;
export default LanNoseSolid;
