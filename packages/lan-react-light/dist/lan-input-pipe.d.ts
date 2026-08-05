import React from 'react';

export interface LanInputPipeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputPipe(props: LanInputPipeProps): React.ReactElement;
export default LanInputPipe;
