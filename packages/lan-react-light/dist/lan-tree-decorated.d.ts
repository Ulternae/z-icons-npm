import React from 'react';

export interface LanTreeDecoratedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeDecorated(props: LanTreeDecoratedProps): React.ReactElement;
export default LanTreeDecorated;
