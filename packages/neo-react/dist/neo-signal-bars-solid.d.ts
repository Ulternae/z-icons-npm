import React from 'react';

export interface NeoSignalBarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsSolid(props: NeoSignalBarsSolidProps): React.ReactElement;
export default NeoSignalBarsSolid;
