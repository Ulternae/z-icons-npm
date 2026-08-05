import React from 'react';

export interface MinaCircleDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleDashedSolid(props: MinaCircleDashedSolidProps): React.ReactElement;
export default MinaCircleDashedSolid;
