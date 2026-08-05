import React from 'react';

export interface NeoShieldHalvedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShieldHalvedSolid(props: NeoShieldHalvedSolidProps): React.ReactElement;
export default NeoShieldHalvedSolid;
