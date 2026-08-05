import React from 'react';

export interface LanCircleFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleFSolid(props: LanCircleFSolidProps): React.ReactElement;
export default LanCircleFSolid;
