import React from 'react';

export interface NeoSignalBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBars(props: NeoSignalBarsProps): React.ReactElement;
export default NeoSignalBars;
