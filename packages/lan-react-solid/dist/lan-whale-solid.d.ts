import React from 'react';

export interface LanWhaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhaleSolid(props: LanWhaleSolidProps): React.ReactElement;
export default LanWhaleSolid;
