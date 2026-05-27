import React from 'react';

export interface NeoTerminalRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTerminalRegularDuo: React.FC<NeoTerminalRegularDuoProps>;
export default NeoTerminalRegularDuo;
