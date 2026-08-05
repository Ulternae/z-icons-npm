import React from 'react';

export interface MinaTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTerminalSolid(props: MinaTerminalSolidProps): React.ReactElement;
export default MinaTerminalSolid;
