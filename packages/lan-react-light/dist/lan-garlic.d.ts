import React from 'react';

export interface LanGarlicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarlic(props: LanGarlicProps): React.ReactElement;
export default LanGarlic;
