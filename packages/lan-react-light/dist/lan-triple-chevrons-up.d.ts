import React from 'react';

export interface LanTripleChevronsUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTripleChevronsUp(props: LanTripleChevronsUpProps): React.ReactElement;
export default LanTripleChevronsUp;
