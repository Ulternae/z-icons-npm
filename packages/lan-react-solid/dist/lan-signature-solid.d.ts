import React from 'react';

export interface LanSignatureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureSolid(props: LanSignatureSolidProps): React.ReactElement;
export default LanSignatureSolid;
