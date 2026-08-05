import React from 'react';

export interface MinaBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBox(props: MinaBoxProps): React.ReactElement;
export default MinaBox;
