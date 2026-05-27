import React from 'react';

export interface CoreFilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFilePlusSolid: React.FC<CoreFilePlusSolidProps>;
export default CoreFilePlusSolid;
