import React from 'react';

export interface MinaCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCommand(props: MinaCommandProps): React.ReactElement;
export default MinaCommand;
