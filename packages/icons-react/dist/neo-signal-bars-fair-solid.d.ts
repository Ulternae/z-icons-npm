import React from 'react';

export interface NeoSignalBarsFairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsFairSolid: React.FC<NeoSignalBarsFairSolidProps>;
export default NeoSignalBarsFairSolid;
