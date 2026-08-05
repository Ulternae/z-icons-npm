import React from 'react';

export interface LanCannabisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannabisSolid(props: LanCannabisSolidProps): React.ReactElement;
export default LanCannabisSolid;
