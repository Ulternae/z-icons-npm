import React from 'react';

export interface LanShareAllProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAll(props: LanShareAllProps): React.ReactElement;
export default LanShareAll;
