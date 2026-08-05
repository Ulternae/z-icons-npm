import React from 'react';

export interface MinaMousePointerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMousePointer(props: MinaMousePointerProps): React.ReactElement;
export default MinaMousePointer;
