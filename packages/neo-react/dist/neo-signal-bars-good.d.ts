import React from 'react';

export interface NeoSignalBarsGoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsGood(props: NeoSignalBarsGoodProps): React.ReactElement;
export default NeoSignalBarsGood;
