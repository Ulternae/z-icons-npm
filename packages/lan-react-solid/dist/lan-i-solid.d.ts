import React from 'react';

export interface LanISolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanISolid(props: LanISolidProps): React.ReactElement;
export default LanISolid;
