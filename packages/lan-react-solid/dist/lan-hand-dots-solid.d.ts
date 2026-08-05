import React from 'react';

export interface LanHandDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandDotsSolid(props: LanHandDotsSolidProps): React.ReactElement;
export default LanHandDotsSolid;
