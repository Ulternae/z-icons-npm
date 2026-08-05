import React from 'react';

export interface LanSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSSolid(props: LanSSolidProps): React.ReactElement;
export default LanSSolid;
