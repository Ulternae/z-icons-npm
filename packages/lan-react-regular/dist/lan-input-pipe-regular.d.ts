import React from 'react';

export interface LanInputPipeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputPipeRegular(props: LanInputPipeRegularProps): React.ReactElement;
export default LanInputPipeRegular;
