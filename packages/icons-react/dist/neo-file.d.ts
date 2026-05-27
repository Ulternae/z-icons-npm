import React from 'react';

export interface NeoFileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFile: React.FC<NeoFileProps>;
export default NeoFile;
