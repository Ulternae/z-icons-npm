import React from 'react';

export interface NeoSignalBarsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSignalBarsRegularDuo(props: NeoSignalBarsRegularDuoProps): React.ReactElement;
export default NeoSignalBarsRegularDuo;
