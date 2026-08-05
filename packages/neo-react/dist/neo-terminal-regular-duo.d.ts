import React from 'react';

export interface NeoTerminalRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTerminalRegularDuo(props: NeoTerminalRegularDuoProps): React.ReactElement;
export default NeoTerminalRegularDuo;
