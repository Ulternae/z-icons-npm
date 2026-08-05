import React from 'react';

export interface LanEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeSolid(props: LanEyeSolidProps): React.ReactElement;
export default LanEyeSolid;
