import React from 'react';

export interface MinaFileTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileTextSolid(props: MinaFileTextSolidProps): React.ReactElement;
export default MinaFileTextSolid;
