import React from 'react';

export interface NeoShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShield(props: NeoShieldProps): React.ReactElement;
export default NeoShield;
