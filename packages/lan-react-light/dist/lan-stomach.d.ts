import React from 'react';

export interface LanStomachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStomach(props: LanStomachProps): React.ReactElement;
export default LanStomach;
