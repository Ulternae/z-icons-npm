import React from 'react';

export interface NeoAngleUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleUpSolid(props: NeoAngleUpSolidProps): React.ReactElement;
export default NeoAngleUpSolid;
