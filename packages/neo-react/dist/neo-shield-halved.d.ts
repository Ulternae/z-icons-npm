import React from 'react';

export interface NeoShieldHalvedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShieldHalved(props: NeoShieldHalvedProps): React.ReactElement;
export default NeoShieldHalved;
