import React from 'react';

export interface MinaFlaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlaskSolid(props: MinaFlaskSolidProps): React.ReactElement;
export default MinaFlaskSolid;
