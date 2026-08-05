import React from 'react';

export interface LanMarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsSolid(props: LanMarsSolidProps): React.ReactElement;
export default LanMarsSolid;
