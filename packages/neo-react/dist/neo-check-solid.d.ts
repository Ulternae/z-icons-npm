import React from 'react';

export interface NeoCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCheckSolid(props: NeoCheckSolidProps): React.ReactElement;
export default NeoCheckSolid;
