import React from 'react';

export interface LanStaplerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStaplerRegular(props: LanStaplerRegularProps): React.ReactElement;
export default LanStaplerRegular;
