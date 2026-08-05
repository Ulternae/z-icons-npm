import React from 'react';

export interface LanPickaxeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickaxeSolid(props: LanPickaxeSolidProps): React.ReactElement;
export default LanPickaxeSolid;
