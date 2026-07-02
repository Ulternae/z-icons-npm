import React from 'react';

export interface CoreFolderMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolderMinus(props: CoreFolderMinusProps): React.ReactElement;
export default CoreFolderMinus;
