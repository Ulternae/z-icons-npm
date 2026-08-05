import React from 'react';

export interface MinaSearchXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchXSolid(props: MinaSearchXSolidProps): React.ReactElement;
export default MinaSearchXSolid;
