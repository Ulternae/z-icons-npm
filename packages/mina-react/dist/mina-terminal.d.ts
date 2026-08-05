import React from 'react';

export interface MinaTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTerminal(props: MinaTerminalProps): React.ReactElement;
export default MinaTerminal;
