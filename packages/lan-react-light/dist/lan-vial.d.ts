import React from 'react';

export interface LanVialProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVial(props: LanVialProps): React.ReactElement;
export default LanVial;
