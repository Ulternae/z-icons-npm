import React from 'react';

export interface NeoStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStopSolid(props: NeoStopSolidProps): React.ReactElement;
export default NeoStopSolid;
