import React from 'react';

export interface NeoFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFlagSolid(props: NeoFlagSolidProps): React.ReactElement;
export default NeoFlagSolid;
