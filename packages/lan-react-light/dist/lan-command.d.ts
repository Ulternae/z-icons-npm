import React from 'react';

export interface LanCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommand(props: LanCommandProps): React.ReactElement;
export default LanCommand;
