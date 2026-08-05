import React from 'react';

export interface LanFileSignatureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSignatureSolid(props: LanFileSignatureSolidProps): React.ReactElement;
export default LanFileSignatureSolid;
