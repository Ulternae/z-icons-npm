import React from 'react';

export interface LanFolderHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderHeart(props: LanFolderHeartProps): React.ReactElement;
export default LanFolderHeart;
