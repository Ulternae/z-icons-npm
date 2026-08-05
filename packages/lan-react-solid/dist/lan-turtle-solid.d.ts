import React from 'react';

export interface LanTurtleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurtleSolid(props: LanTurtleSolidProps): React.ReactElement;
export default LanTurtleSolid;
