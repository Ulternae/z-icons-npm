import React from 'react';

export interface NeoKeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoKeySolid(props: NeoKeySolidProps): React.ReactElement;
export default NeoKeySolid;
