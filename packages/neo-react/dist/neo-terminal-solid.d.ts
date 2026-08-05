import React from 'react';

export interface NeoTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTerminalSolid(props: NeoTerminalSolidProps): React.ReactElement;
export default NeoTerminalSolid;
