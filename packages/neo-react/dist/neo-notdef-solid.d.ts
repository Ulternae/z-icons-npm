import React from 'react';

export interface NeoNotdefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoNotdefSolid(props: NeoNotdefSolidProps): React.ReactElement;
export default NeoNotdefSolid;
