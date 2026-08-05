import React from 'react';

export interface LanGuitarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitars(props: LanGuitarsProps): React.ReactElement;
export default LanGuitars;
