import React from 'react';

export interface LanSackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSack(props: LanSackProps): React.ReactElement;
export default LanSack;
