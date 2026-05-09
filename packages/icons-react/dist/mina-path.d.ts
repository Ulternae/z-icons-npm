import React from 'react';

export interface MinaPathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPath: React.FC<MinaPathProps>;
export default MinaPath;
