import React from 'react';

export interface LanBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsSolid(props: LanBarsSolidProps): React.ReactElement;
export default LanBarsSolid;
