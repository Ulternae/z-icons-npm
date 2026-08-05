import React from 'react';

export interface NeoSignalBarsWeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsWeak(props: NeoSignalBarsWeakProps): React.ReactElement;
export default NeoSignalBarsWeak;
