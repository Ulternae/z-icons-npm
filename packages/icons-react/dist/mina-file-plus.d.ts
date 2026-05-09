import React from 'react';

export interface MinaFilePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilePlus: React.FC<MinaFilePlusProps>;
export default MinaFilePlus;
