import React from 'react';

export interface LanInputPipeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputPipeThin(props: LanInputPipeThinProps): React.ReactElement;
export default LanInputPipeThin;
