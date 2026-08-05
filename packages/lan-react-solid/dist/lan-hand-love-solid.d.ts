import React from 'react';

export interface LanHandLoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandLoveSolid(props: LanHandLoveSolidProps): React.ReactElement;
export default LanHandLoveSolid;
