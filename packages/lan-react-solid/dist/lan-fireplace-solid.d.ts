import React from 'react';

export interface LanFireplaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireplaceSolid(props: LanFireplaceSolidProps): React.ReactElement;
export default LanFireplaceSolid;
