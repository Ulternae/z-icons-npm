import React from 'react';

export interface NeoTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTerminal(props: NeoTerminalProps): React.ReactElement;
export default NeoTerminal;
