import React from 'react';

export interface LanPersonSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSimpleSolid(props: LanPersonSimpleSolidProps): React.ReactElement;
export default LanPersonSimpleSolid;
