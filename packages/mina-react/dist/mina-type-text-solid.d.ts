import React from 'react';

export interface MinaTypeTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTypeTextSolid(props: MinaTypeTextSolidProps): React.ReactElement;
export default MinaTypeTextSolid;
