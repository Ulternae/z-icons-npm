import React from 'react';

export interface MinaToggleRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaToggleRight(props: MinaToggleRightProps): React.ReactElement;
export default MinaToggleRight;
