import React from 'react';

export interface NeoShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShieldSolid(props: NeoShieldSolidProps): React.ReactElement;
export default NeoShieldSolid;
