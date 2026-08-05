import React from 'react';

export interface MinaSelectMultipleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSelectMultiple(props: MinaSelectMultipleProps): React.ReactElement;
export default MinaSelectMultiple;
