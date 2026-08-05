import React from 'react';

export interface MinaFolderMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderMinus(props: MinaFolderMinusProps): React.ReactElement;
export default MinaFolderMinus;
