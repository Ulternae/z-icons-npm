import React from 'react';

export interface LanFlaskVialProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskVial(props: LanFlaskVialProps): React.ReactElement;
export default LanFlaskVial;
