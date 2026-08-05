import React from 'react';

export interface LanStaplerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStapler(props: LanStaplerProps): React.ReactElement;
export default LanStapler;
