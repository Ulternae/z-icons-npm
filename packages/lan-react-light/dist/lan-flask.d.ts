import React from 'react';

export interface LanFlaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlask(props: LanFlaskProps): React.ReactElement;
export default LanFlask;
