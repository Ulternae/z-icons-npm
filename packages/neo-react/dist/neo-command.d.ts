import React from 'react';

export interface NeoCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCommand(props: NeoCommandProps): React.ReactElement;
export default NeoCommand;
