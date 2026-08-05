import React from 'react';

export interface LanStethoscopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStethoscopeSolid(props: LanStethoscopeSolidProps): React.ReactElement;
export default LanStethoscopeSolid;
