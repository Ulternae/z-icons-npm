import React from 'react';

export interface NeoSignalBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSignalBarsSolid: React.FC<NeoSignalBarsSolidProps>;
export default NeoSignalBarsSolid;
