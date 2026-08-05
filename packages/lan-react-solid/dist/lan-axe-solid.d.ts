import React from 'react';

export interface LanAxeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxeSolid(props: LanAxeSolidProps): React.ReactElement;
export default LanAxeSolid;
