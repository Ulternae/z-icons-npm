import React from 'react';

export interface NeoHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHeartSolid(props: NeoHeartSolidProps): React.ReactElement;
export default NeoHeartSolid;
