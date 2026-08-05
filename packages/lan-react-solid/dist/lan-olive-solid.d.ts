import React from 'react';

export interface LanOliveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOliveSolid(props: LanOliveSolidProps): React.ReactElement;
export default LanOliveSolid;
