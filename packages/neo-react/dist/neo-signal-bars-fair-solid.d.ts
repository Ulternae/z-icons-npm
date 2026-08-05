import React from 'react';

export interface NeoSignalBarsFairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsFairSolid(props: NeoSignalBarsFairSolidProps): React.ReactElement;
export default NeoSignalBarsFairSolid;
