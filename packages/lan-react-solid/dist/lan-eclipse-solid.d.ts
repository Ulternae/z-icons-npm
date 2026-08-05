import React from 'react';

export interface LanEclipseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEclipseSolid(props: LanEclipseSolidProps): React.ReactElement;
export default LanEclipseSolid;
