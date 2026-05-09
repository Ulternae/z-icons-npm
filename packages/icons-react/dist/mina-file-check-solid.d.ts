import React from 'react';

export interface MinaFileCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileCheckSolid: React.FC<MinaFileCheckSolidProps>;
export default MinaFileCheckSolid;
