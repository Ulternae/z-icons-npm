import React from 'react';

export interface MinaFlaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlask(props: MinaFlaskProps): React.ReactElement;
export default MinaFlask;
