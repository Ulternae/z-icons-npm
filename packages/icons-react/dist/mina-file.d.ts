import React from 'react';

export interface MinaFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFile: React.FC<MinaFileProps>;
export default MinaFile;
