import React from 'react';

export interface MinaFolderHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderHeart(props: MinaFolderHeartProps): React.ReactElement;
export default MinaFolderHeart;
