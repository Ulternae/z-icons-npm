import React from 'react';

export interface LanHandFistSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandFistSolid(props: LanHandFistSolidProps): React.ReactElement;
export default LanHandFistSolid;
