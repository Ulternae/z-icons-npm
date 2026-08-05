import React from 'react';

export interface MinaPathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPath(props: MinaPathProps): React.ReactElement;
export default MinaPath;
