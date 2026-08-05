import React from 'react';

export interface LanBraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBra(props: LanBraProps): React.ReactElement;
export default LanBra;
