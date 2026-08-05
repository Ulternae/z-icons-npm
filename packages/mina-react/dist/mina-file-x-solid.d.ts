import React from 'react';

export interface MinaFileXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileXSolid(props: MinaFileXSolidProps): React.ReactElement;
export default MinaFileXSolid;
