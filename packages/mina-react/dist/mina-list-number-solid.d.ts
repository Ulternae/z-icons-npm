import React from 'react';

export interface MinaListNumberSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaListNumberSolid(props: MinaListNumberSolidProps): React.ReactElement;
export default MinaListNumberSolid;
