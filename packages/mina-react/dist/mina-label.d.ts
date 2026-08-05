import React from 'react';

export interface MinaLabelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLabel(props: MinaLabelProps): React.ReactElement;
export default MinaLabel;
