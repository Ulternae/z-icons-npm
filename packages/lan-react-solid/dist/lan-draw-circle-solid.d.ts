import React from 'react';

export interface LanDrawCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawCircleSolid(props: LanDrawCircleSolidProps): React.ReactElement;
export default LanDrawCircleSolid;
