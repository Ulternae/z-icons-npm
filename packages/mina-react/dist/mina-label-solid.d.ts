import React from 'react';

export interface MinaLabelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLabelSolid(props: MinaLabelSolidProps): React.ReactElement;
export default MinaLabelSolid;
