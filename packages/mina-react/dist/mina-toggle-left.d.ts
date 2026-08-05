import React from 'react';

export interface MinaToggleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaToggleLeft(props: MinaToggleLeftProps): React.ReactElement;
export default MinaToggleLeft;
