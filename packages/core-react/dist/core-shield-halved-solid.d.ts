import React from 'react';

export interface CoreShieldHalvedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShieldHalvedSolid(props: CoreShieldHalvedSolidProps): React.ReactElement;
export default CoreShieldHalvedSolid;
