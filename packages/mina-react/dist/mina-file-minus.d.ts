import React from 'react';

export interface MinaFileMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileMinus(props: MinaFileMinusProps): React.ReactElement;
export default MinaFileMinus;
